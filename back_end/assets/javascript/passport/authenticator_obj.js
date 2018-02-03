var mongoose = require("mongoose");
var passport = require("passport");
var User = require("../../../models/user_model");


var userController = {};

// Restrict access to root page
userController.home = function(req, res) {
  //res.render('index', { user : req.user });
  res.redirect('/');
};

// Go to registration page
userController.register = function(req, res) {
 // res.render('register');
};

// Post registration
userController.doRegister = function(req, res) {
  User.register(new User({ username : req.query.username, password : req.query.password, email : req.query.email , phone : req.query.phone}), (err, user) => {
    if (err) {
      return res.render('register', { user : user });
    }

    passport.authenticate('/signup')(req, res, function () {
      res.redirect('/');
    });
  });
};

// Go to login page
userController.login = function(req, res) {
  //res.render('login');
  res.send("login page")
};

// Post login
userController.doLogin = function(req, res) {
  passport.authenticate('local')(req, res, function () {
    res.redirect('/');
  });
};

// logout
userController.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};

module.exports = userController;