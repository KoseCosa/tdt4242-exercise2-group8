const passport = require('passport');
const config = require('./config');
const User = require('../db/models/user');
const jwt = require('jsonwebtoken');

// Set Strategy
config.strategy(passport);

exports.register = function(req,res){
  if (!req.body.username || !req.body.password) {
    res.json({success: false, msg:'Please pass a username and password.'})
  }
  else {
    const newUser = new User({
      username: req.body.username,
      password: req.body.password,
      admin: false
    });
    newUser.save(function(err){
      if (err){
        res.json({success: false, msg: "Username already exists."});
      }
      res.json({success: true, msg: 'Successfully created new user.'});
    });
  }
}

exports.login = function(req, res){
  console.log("Login");
  User.findOne({
    username: req.body.username
  }, function(err, user){
    if (err) throw err;
    if (!user) {
      res.status(401).send({success: false, msg: 'User not found'});
    }
    else {
      user.comparePassword(req.body.password, function(err, isMatch) {
        if (isMatch && !err) {
          var token = jwt.sign(user.toJSON(), config.secret, {expiresIn: 3600});
          res.json({success: true, token: 'JWT ' + token});
        }
        else {
          res.status(401).send({success: false, msg: "Wrong password."})
        }
      })
    }
  });
}

exports.authenticate = passport.authenticate('jwt', { session: false});
