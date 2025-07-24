const mongoose = require('mongoose');

const userAppSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true, lowercase: true, trim: true },
  description: { type: String, trim: true, required: true },
  connected: { type: Boolean, default: false },
}, {
  timestamps: true
});

module.exports = mongoose.model("UserApp", userAppSchema);
