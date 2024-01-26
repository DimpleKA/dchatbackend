const mongoose = require('mongoose');

// Connection URL
const uri = 'mongodb+srv://Abbujao:Dimple9@dchatcluster.mi3txxi.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });
