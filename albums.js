const express = require('express');
const router = express.Router();
const Album = require('../models/album');

// Get all albums
router.get('/', (req, res) => {
  Album.find()
    .then(albums => res.json(albums))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add a new album
router.post('/', (req, res) => {
  const newAlbum = new Album(req.body);
  newAlbum.save()
    .then(() => res.json('Album added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Update an album
router.put('/:id', (req, res) => {
  Album.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedAlbum => res.json(updatedAlbum))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Delete an album
router.delete('/:id', (req, res) => {
  Album.findByIdAndDelete(req.params.id)
    .then(() => res.json('Album deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
