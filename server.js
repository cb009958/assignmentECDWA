const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const Album = require('./models/album');
const Artist = require('./models/artist');
const Genre = require('./models/genre');
const Track = require('./models/track');
const User = require('./models/user');

const app = express();
const port = 3000;

// Database Connection
mongoose.connect('your_mongodb_connection_string', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json());

// Example Album Routes
app.get('/albums', (req, res) => {
  Album.find()
    .then(albums => res.json(albums))
    .catch(err => res.status(400).json('Error: ' + err));
});

app.post('/albums', (req, res) => {
  const newAlbum = new Album(req.body);
  newAlbum.save()
    .then(() => res.json('Album added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Continue with other routes for artists, genres, tracks, users

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
