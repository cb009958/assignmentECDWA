const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bio: String,
    avatar: String,
    songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Track' }],
    albums: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Album' }]
});

module.exports = mongoose.model('Artist', artistSchema);
