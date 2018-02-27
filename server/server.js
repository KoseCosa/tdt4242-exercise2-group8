// Imports
const express = require('express');
const mongoose = require('mongoose');

// Initialize Express Server
const server = express();

// Database
const db = mongoose.connect('mongodb://heroku_3msqfcw6:t562gfc8t8s3vqkpq1qj3t2c52@ds145438.mlab.com:45438/heroku_3msqfcw6');
const port = process.env.PORT || 4300

// Routers
const apiRouter = require('./routes/api.js');

// Other Routes
server.use(express.static(__dirname + '/../dist')); // Static Folder

server.use('/api',apiRouter);
// Start Listening
server.listen(port, () => console.log('Server listening on port '+port+'!'));
