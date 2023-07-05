// index.js (or whatever your main server file is named)
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./auth.routes');

const app = express();

// Middleware for JSON parsing
app.use(express.json());


mongoose.connect('YOUR_MONGODB_URI', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));


app.use('/api', authRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
