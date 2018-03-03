const express = require('express');
const auth = require('../../auth/auth')
const bodyParser = require('body-parser');
const passport = require('passport');
const User = require('../../db/models/user.js')

const router = express.Router();

// Enable CORS

router.use(bodyParser.urlencoded({ extended: false }));

router.post('/register', auth.register);

router.post('/login', auth.login);

router.get('/test', auth.authenticate, function(req,res){
  res.send('awesome');
})

module.exports = router;
