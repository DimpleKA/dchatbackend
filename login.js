const mongoose = require('./db');

// Define User schema
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  otp: String
});

// Create User model
const User = mongoose.model('User', userSchema);

// Function to authenticate user login
const loginUser = async (email, password) => {
  try {
    const user = await User.findOne({ email, password }).exec();
    if (user) {
      console.log('User logged in successfully');
    } else {
      console.log('Invalid email or password');
    }
  } catch (error) {
    console.error('Error logging in user:', error);
  }
};

module.exports = loginUser;
