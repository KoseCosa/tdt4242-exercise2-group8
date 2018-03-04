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

router.get('/loggedin', auth.authenticate, function(req,res){
  res.status(200).json({ success: true, message: "User is logged in" })
});

router.post('/logout', auth.logout);

module.exports = router;
