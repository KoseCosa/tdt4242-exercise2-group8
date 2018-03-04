const express = require('express');
const auth = require('../../auth/auth')
const bodyParser = require('body-parser');
const passport = require('passport');
const User = require('../../db/models/user.js')

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));

router.post('/register', auth.register);

router.post('/login', auth.login);

router.post('/logout', auth.logout);

router.get('/loggedin', auth.authenticate, function(req,res){
  res.json({ success: true, message: "User is logged in" })
});

router.get('/isadmin', auth.authenticate, auth.authorize, function(req,res){
  res.json({ success: true, message: "User is Admin" })
});

module.exports = router;
