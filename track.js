const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
    name: { type: String, required: true },
    file: String, // URL or path to the track file
    genre: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre' },
    duration: Number, // Duration in seconds
    artist: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist' },
    album: { type: mongoose.Schema.Types.ObjectId, ref: 'Album' }
});

module.exports = mongoose.model('Track', trackSchema);
