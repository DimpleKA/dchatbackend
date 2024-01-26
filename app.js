const express = require('express');
const mongoose = require('mongoose');
const registrationRouter = require('./registration');

const app = express();
const PORT = process.env.PORT || 3000;

// Connection URL for MongoDB Atlas
const uri = 'mongodb+srv://Abbujao:Dimple9@dchatcluster.mi3txxi.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB Atlas
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB', error);
  process.exit(1); // Exit the application if unable to connect to MongoDB
});

// Middleware
app.use(express.json());

// Routes
app.use('/api', registrationRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
