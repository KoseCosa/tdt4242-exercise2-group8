// Imports
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
const config = require('./auth/config');

// Initialize Express Server
const server = express();

// Database
const dbURI = process.env.MONGODB_URI || 'mongodb://heroku_3msqfcw6:t562gfc8t8s3vqkpq1qj3t2c52@ds145438.mlab.com:45438/heroku_3msqfcw6'
const mongodb = mongoose.connect(dbURI);
const port = process.env.PORT || 4300

// Routers
const apiRouter = require('./routes/api.js');


server.use(session({
    secret: config.secret,
    resave: true,
    saveUninitialized: true,
}));
server.use(passport.initialize());
server.use(passport.session());
// Enable CORS
server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// Static Routes
server.use(express.static(path.join(__dirname, '/../dist')));

// Set our Api Routes
server.use('/api', apiRouter);

// Catch all other routes and return the index file
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../dist/index.html'));
});

// Start Listening
console.log('Database: ',dbURI);
server.listen(port, () => console.log('Server listening on port '+port+'!'));
