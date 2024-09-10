const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 3000;
const JWT_SECRET = "mQvL$P2Gm3qB#zjR8wZ&uV7d!T*Xa10rD"; 

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/AIR_QUALITY');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  location: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  },
});

const User = mongoose.model('User', userSchema);

app.post('/signup', async (req, res) => {
  const { username, email, location, phoneNumber, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ username, email, location, phoneNumber, password: hashedPassword });
  await user.save();

  res.status(201).send('User created');
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).send({ message: 'User not found!' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).send({ message: 'Invalid password!' });
  }

  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
  res.send({ token, username: user.username });
});

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

app.get('/dashboard', authenticateToken, (req, res) => {
  res.send({ message: 'Welcome to the dashboard' });
});

app.get('/profile', authenticateToken, async (req, res) => {
  const userId = req.user.userId;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    res.send(user);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).send({ message: 'Error fetching user data' });
  }
});

app.put('/profile', authenticateToken, async (req, res) => {
  const userId = req.user.userId;
  const { username, email, location, phoneNumber, password } = req.body;

  try {
    const updateData = { username, email, location, phoneNumber };

    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    const user = await User.findByIdAndUpdate(userId, updateData, { new: true });
    res.send(user);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).send({ message: 'Error updating user' });
  }
});


app.delete('/delete/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    res.send({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).send({ message: 'Error deleting user' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
