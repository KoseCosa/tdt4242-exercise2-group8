// Imports
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const passportInint = require('./auth/init')
// Initialize Express Server
const server = express();

// Database
const dbURI = process.env.MONGODB_URI || 'mongodb://heroku_3msqfcw6:t562gfc8t8s3vqkpq1qj3t2c52@ds145438.mlab.com:45438/heroku_3msqfcw6'
const mongodb = mongoose.connect(dbURI);
const port = process.env.PORT || 4300

// Routers
const apiRouter = require('./routes/api.js');

// Passport

/*server.use(session({
    store: new RedisStore({
        url: config.redisStore.url
    }),
    secret: config.redisStore.secret,
    resave: false,
    saveUninitialized: false
    }))



server.get('/profile',
    authenticationMiddleware(),
    function(){
    res.send("Logged in")
    })
*/

server.use(passport.initialize())
server.use(passport.session())

// Other Routes
server.use(express.static(__dirname + '/../dist')); // Static Folder

server.use('/api',apiRouter);
// Start Listening
server.listen(port, () => console.log('Server listening on port '+port+'!'));
