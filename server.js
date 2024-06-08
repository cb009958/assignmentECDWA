const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();  // Make sure to install dotenv: npm install dotenv

const app = express();
const port = process.env.PORT || 3000;  // Use the default port or 3000

// Database Connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,  // These options are for deprecation warnings
    useCreateIndex: true
}).then(() => {
    console.log('MongoDB connected successfully');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

// Middleware
app.use(cors());  // Enables CORS
app.use(bodyParser.json());  // Parses JSON requests

// Routes
const albumRoutes = require('./routes/albums');
const artistRoutes = require('./routes/artists');
const genreRoutes = require('./routes/genres');
const trackRoutes = require('./routes/tracks');
const userRoutes = require('./routes/users');

app.use('/albums', albumRoutes);
app.use('/artists', artistRoutes);
app.use('/genres', genreRoutes);
app.use('/tracks', trackRoutes);
app.use('/users', userRoutes);

// Root Route - Optional
app.get('/', (req, res) => {
    res.send('Welcome to the DreamStreamer API');
});

// Start Server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
