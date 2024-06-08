const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 3000;
const JWT_SECRET = "mQvL$P2Gm3qB#zjR8wZ&uV7d!T*Xa9rD"; 

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/AIR_QUALITY', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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
  console.log('signup successful');
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

  const expiresInMinutes = 1;
  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: expiresInMinutes * 60 });
  res.send({ token });
});


app.get('/dashboard', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'Unauthorized' });
    }

    res.send({ message: 'Welcome to the dashboard' });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
