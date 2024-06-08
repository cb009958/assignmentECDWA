const express = require('express');
const router = express.Router();
const Artist = require('../models/artist');

// Get all artists
router.get('/', (req, res) => {
  Artist.find()
    .then(artists => res.json(artists))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add a new artist
router.post('/', (req, res) => {
  const newArtist = new Artist(req.body);
  newArtist.save()
    .then(() => res.json('Artist added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Update an artist
router.put('/:id', (req, res) => {
  Artist.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedArtist => res.json(updatedArtist))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Delete an artist
router.delete('/:id', (req, res) => {
  Artist.findByIdAndDelete(req.params.id)
    .then(() => res.json('Artist deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
