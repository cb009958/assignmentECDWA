const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    name: { type: String, required: true },
    number_of_tracks: Number,
    year: Number,
    album_art: String,
    artist: {
        id: mongoose.Schema.Types.ObjectId,
        name: String,
        avatar: String
    },
    genre: String
});

module.exports = mongoose.model('Album', albumSchema);
