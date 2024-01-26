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

// Connection URL
const uri = 'mongodb+srv://Abbujao:Dimple9@dchatcluster.mi3txxi.mongodb.net/dchatdatabase';

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        // Example: Register a new user

    })
    .catch((error) => {
        console.error('Error connecting to MongoDB', error);
    });

// Function to register a new user
async function registerUser(username, email, password) {
    try {
        // Check if the email already exists
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            console.log('Email already exists');
            return; // Exit the function if email exists
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
        console.log('User registered successfully');
    } catch (error) {
        console.error('Error registering user', error);
    }
}

// Example user registration
registerUser('JaneDoe', 'janedoe@example.com', 'password456');
