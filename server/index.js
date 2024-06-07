const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./routes/authRoute');
const jwt = require('jsonwebtoken'); // Import JWT library

const verifyToken = require('./middleware/verifyToken'); // Import verification middleware
// Import authentication middleware


const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/AIR_QUALITY')
    .then(() => console.log('MongoDB connected successfully!'))
    .catch((error) => console.error('Failed to connect', error));

// Middleware to protect routes requiring authentication
app.use('/api/dashboard',verifyToken);
// Server-side route for token verification 
app.post('/api/verifyToken', verifyToken, (req, res) => {
  res.status(200).send('Token is valid');
});

// Global error handler
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
});

// Server
const port = 3000;

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
