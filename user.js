const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Should be hashed
    age: Number,
    country: String,
    subscription: { type: String, enum: ['personal', 'family', 'group', 'business'] },
    phone: String
});

module.exports = mongoose.model('User', userSchema);
