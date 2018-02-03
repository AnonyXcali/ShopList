var express = require('express');
var router = express.Router();
var auth = require("../assets/javascript/passport/authenticator_obj");




// restrict index for logged in user only
router.get('/', auth.home);

// route to register page
router.get('/register', auth.register);

// route for register action
router.post('/register', auth.doRegister);

// route to login page
router.get('/login', auth.login);

// route for login action
router.post('/login', auth.doLogin);

// route for logout action
router.get('/logout', auth.logout);

module.exports = router;

// module.exports = function(passport){

// 	/* GET login page. */
// 	router.get('/', function(req, res) {
//         // Display the Login page with any flash message, if any
//         console.log("at /");
//         //res.render('index', { message: req.flash('message') });
//         res.send("ok");
// 	});

// 	/* Handle Login POST */
// 	router.post('/login', passport.authenticate('login', {
// 		successRedirect: '/home',
// 		failureRedirect: '/',
// 		failureFlash : true  
// 	}));

// 	/* GET Registration Page */
// 	router.get('/signup', function(req, res){
//         console.log(req.body);
//         //res.render('register',{message: req.flash('message')});
//         res.send("at signup page");
// 	});

// 	/* Handle Registration POST */
// 	router.post('/signup', passport.authenticate('signup', {
// 		successRedirect: '/home',
// 		failureRedirect: '/signup',
// 		failureFlash : true  
// 	}));

	/* GET Home Page */
	// router.get('/home', isAuthenticated, function(req, res){
    //     //res.render('home', { user: req.user });
    //     console.log("at home page");
    //     res.send("successfully logged in");
	// });

// 	/* Handle Logout */
// 	router.get('/signout', function(req, res) {
// 		req.logout();
// 		res.redirect('/');
// 	});

// 	return router;
// }
