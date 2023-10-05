const mongoose = require('mongoose');

const fireSchema = new mongoose.Schema({
    location: { type: String, required: true },
    intensity: { type: Number },
    date: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('Fire', fireSchema);
