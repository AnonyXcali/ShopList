var express = require('express');
var router = express.Router();
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

	/* GET login page. */
	router.get('/', function(req, res) {
    	// Display the Login page with any flash message, if any
		//res.render('index', { message: req.flash('message') });
		res.json({'status' : 'reached_init_one'})
	});

	/* Handle Login POST */
	router.post('/login', passport.authenticate('login', {
		successRedirect: '/home',
		failureRedirect: '/',
		failureFlash : true  
	}));

	/* GET Registration Page */
	router.get('/signup', function(req, res){
		// res.render('register',{message: req.flash('message')});
	//	res.json({'status' : 'reached_init_signup'});
		res.send("user_created");
		// res.end();

	});

	router.post('/signup', function(req, res, next) {
		passport.authenticate('signup', {failureFlash:true}, function(err, user, info) {
		 if (err) { return next(err); }
		 if (!user) { return res.redirect('/'); }
		req.logIn(user, function(err) {
		  if (err) { return next(err); }
		 return res.redirect('/home/' + user.username);
	   });
	  })(req, res, next);
	  });

	/* GET Home Page */
	router.get('/home/:user', isAuthenticated, function(req, res){
		// res.render('home', { user: req.user });
		//res.json({'status' : 'home'})
		req.params.user = req.user.username;
		console.log(req.user.username);
		res.send('hello ' + req.params.user + '!');
		
		//res.redirect(`/home/${req.user.username}`)

	});

	/* Handle Logout */
	router.get('/signout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	return router;
}





