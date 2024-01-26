const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define the schema for the user collection
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // Unique email constraint
    password: { type: String, required: true },
    // Add more fields as needed
});

// Create the User model based on the userSchema
const User = mongoose.model('User', userSchema);

// POST /api/register
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Create a new user document
    const newUser = new User({
      username: username,
      email: email,
      password: password,
      // Add more fields as needed
    });

    // Save the user document to the database
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
