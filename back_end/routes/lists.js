var express = require('express');
var router = express.Router();
var List = require('../models/shop_list');
// var isAuthenticated = function (req, res, next) {
// 	// if user is authenticated in the session, call the next() to call the next request handler 
// 	// Passport adds this method to request object. A middleware is allowed to add properties to
// 	// request and response objects
// 	console.log('i was checked');
// 	if (req.isAuthenticated())
// 		return next();
// 	// if the user is not authenticated then redirect him to the login page
// 	res.redirect('/');
// }


router.get('/', function(req, res) {
    res.send('GET handler for /lists route.');
});

router.get('/create',function(req,res){
  res.json({'status' : 'created'});
});

router.post('/create', function(req, res, err) {
	// var newList = new List({
	// 	contentId : req.body.contentId,
	// });
	// newList.listContent.push(sq)
	console.log('here');
	console.log(req.body)
	console.log("exit");
	//console.log('content :: ' + req.body.listContent );
	var listIdx = req.body.listId;
	var itemList = req.body.listContent;
	console.log(itemList);
	var newList = new List();
	//newList.listId = req.body.listId;
	newList.listId = listIdx
	var data = [];
	// var dataObj = [
	// 	{
	// 		_id : 100000,
	// 		itemName : "saurav"
	// 	},
	// 	{
	// 		_id : 109001,
	// 		itemName : "saurav2"
	// 	}
	// ]
	// console.log(data);

	// itemList.listContent = data;
	itemList.forEach(element => {
		data.push(element);
	});

	newList.listContent = data;



	newList.save(function(err, userinfo) {
        if(!err) {
			res.json({'status' : 'check console'})
        }
        else {
            console.log(err);
        }
	});
	});

module.exports = router;

// module.exports = function(){
//     router.get('/', function(req, res) {
//     	// Display the Login page with any flash message, if any
// 		//res.render('index', { message: req.flash('message') });
// 		res.json({'status' : 'reached_init_one_create_status'})
//     });
    
//     /* GET Registration Page */
// 	// router.get('/create', function(req, res){
// 	// 	// res.render('register',{message: req.flash('message')});
// 	// //	res.json({'status' : 'reached_init_signup'});
// 	// 	res.send("user_created");
// 	// 	// res.end();

// 	// });

// 	// router.post('/create', function(req, res, next) {
// 	// 	passport.authenticate('create', {failureFlash:true}, function(err, user, info) {
// 	// 	 if (err) { return next(err); }
// 	// 	 if (!user) { return res.redirect('/'); }
// 	// 	req.logIn(user, function(err) {
// 	// 	  if (err) { return next(err); }
// 	// 	 return res.redirect('/home/' + user.username);
// 	//    });
// 	//   })(req, res, next);
//     //   });
    
//     //create Handler :::
//     router.get('/create' , function(req,res){
//         res.json('welcome to create page!');
//     })
    
//     router.post('/create',function(req,res,next){
        
//     });


// 	return router;
// }





