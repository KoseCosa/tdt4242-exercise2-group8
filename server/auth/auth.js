const passport = require('passport');
const config = require('./config');
const User = require('../db/models/user');


passport.serializeUser(config.serializeUser);
passport.deserializeUser(config.deserializeUser);
// Set Strategy
config.loginStrategy(passport);
config.registerStrategy(passport);

exports.register = function(req,res, next){
  console.log('registering')
  passport.authenticate('local-register', function(err,user,info){
    if (err) { return (res.status(500).json({ success: false, message: "Error!"})); }
    if (!user) { return (res.status(500).json({ success: false, message: "Username taken"}))}
    return res.status(200).json({ success: true, message: "Register Successful" });
  })(req, res, next);
};

exports.login = function(req,res, next){
  passport.authenticate('local-login', function(err,user,info){
    if (err) { return (err); }
    if (!user) { return (res.status(500).json({ success: false, message: "Wrong Username or Password"}))}
    req.login(user, function(err){
      if (err) { return res.status(500).json({ success: false, message: "Wrong Username or Password"}); }
      return res.status(200).json({ success: true, message: "Login Successful" });
    })
  })(req, res, next);
}

exports.logout = function(req, res){
  req.logout();
  res.status(200).json({ success: true, message: "Logout Successful" });
}

exports.authenticate = function(req, res, next){
  if (req.isAuthenticated())
    return next();
  res.status(500).json({ success: false, message: "User is not logged in" });
}
