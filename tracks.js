const express = require('express');
const router = express.Router();
const Track = require('../models/track');

// Get all tracks
router.get('/', (req, res) => {
  Track.find()
    .then(tracks => res.json(tracks))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add a new track
router.post('/', (req, res) => {
  const newTrack = new Track(req.body);
  newTrack.save()
    .then(() => res.json('Track added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Update a track
router.put('/:id', (req, res) => {
  Track.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedTrack => res.json(updatedTrack))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Delete a track
router.delete('/:id', (req, res) => {
  Track.findByIdAndDelete(req.params.id)
    .then(() => res.json('Track deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
