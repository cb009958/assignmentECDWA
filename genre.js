const express = require('express');
const router = express.Router();
const Genre = require('../models/genre');

// Get all genres
router.get('/', (req, res) => {
  Genre.find()
    .then(genres => res.json(genres))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add a new genre
router.post('/', (req, res) => {
  const newGenre = new Genre(req.body);
  newGenre.save()
    .then(() => res.json('Genre added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Update a genre
router.put('/:id', (req, res) => {
  Genre.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedGenre => res.json(updatedGenre))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Delete a genre
router.delete('/:id', (req, res) => {
  Genre.findByIdAndDelete(req.params.id)
    .then(() => res.json('Genre deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
