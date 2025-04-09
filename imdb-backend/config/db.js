const mongoose = require('mongoose');

const connectDB = async () => {
   const uri =  "mongodb+srv://jmanpreet1000:XaBj8CuYb4gS51Rs@manpreet.8dpj7fr.mongodb.net/imdb?retryWrites=true&w=majority"
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
