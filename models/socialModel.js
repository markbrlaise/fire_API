const mongoose = require('mongoose');

const socialSchema = new mongoose.Schema({
    text: { type: String },
    user: { type: String },
    created_at: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Social', socialSchema);
