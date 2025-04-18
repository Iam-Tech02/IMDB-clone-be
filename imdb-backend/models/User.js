const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  mobile: String,
  gender: String,
  city: String,
  email: { type: String, unique: true },
  password: String
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
