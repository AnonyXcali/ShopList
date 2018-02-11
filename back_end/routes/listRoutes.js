var express = require('express');
var router = express.Router();
var userX = require('../models/user_model');

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	console.log('i was checked');
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/');
}


module.exports = function(passport){
    router.get('/', function(req, res) {
    	// Display the Login page with any flash message, if any
		//res.render('index', { message: req.flash('message') });
		res.json({'status' : 'reached_init_one'})
    });
    
    /* GET Registration Page */
	router.get('/create', function(req, res){
		// res.render('register',{message: req.flash('message')});
	//	res.json({'status' : 'reached_init_signup'});
		res.send("user_created");
		// res.end();

	});

	// router.post('/create', function(req, res, next) {
	// 	passport.authenticate('create', {failureFlash:true}, function(err, user, info) {
	// 	 if (err) { return next(err); }
	// 	 if (!user) { return res.redirect('/'); }
	// 	req.logIn(user, function(err) {
	// 	  if (err) { return next(err); }
	// 	 return res.redirect('/home/' + user.username);
	//    });
	//   })(req, res, next);
    //   });
    
    //create Handler :::
    router.get('/create' , function(req,res){
        res.json('welcome to create page!');
    })
    
    router.post('/create',function(req,res,next){
        
    });


	return router;
}





