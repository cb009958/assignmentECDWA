const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Get all users
router.get('/', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add a new user
router.post('/', (req, res) => {
  const newUser = new User(req.body);
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Update a user
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedUser => res.json(updatedUser))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Delete a user
router.delete('/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
