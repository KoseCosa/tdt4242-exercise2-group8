const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');

const User = require('../db/models/user');
const secret = 'dev-secret';

exports.secret = secret;

exports.loginStrategy = function(passport){
  passport.use('local-login', new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));
}

exports.registerStrategy = function(passport){
  passport.use('local-register', new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (user) { return done(null, false); }
        const newUser = new User({});
        newUser.username = username;
        newUser.password = newUser.generateHash(password);
        newUser.save(function(err){
          if (err){
            console.log(err)
            throw err;
          }
        });
        return done(null, newUser);
      });
    }
  ));
}

exports.serializeUser = function(user, done) {
  done(null, user.id);
};

    // used to deserialize the user
exports.deserializeUser = function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
};
