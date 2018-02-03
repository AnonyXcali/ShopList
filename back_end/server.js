const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
var dbConfig = require('../back_end/assets/javascript/db.js');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;


//PASSPORT

var passport = require('passport');
var expressSession = require('express-session');
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

//PASSPORT

app.use(bodyParser.urlencoded({extended: true}))
//app.set('view engine', 'jade');

var flash = require('connect-flash');
app.use(flash());

// Initialize Passport
var initPassport = require('./assets/javascript/passport/init');
initPassport(passport);

// MongoClient.connect(dbConfig.url, (err, client) => {
// if(err) return console.log(err)
// db = client.db('shop_list_database')
mongoose.connect(dbConfig.url)
  .then(() =>  app.listen(3000, () => {
    console.log('listening on 3000')
  }))
  .catch((err) => console.error(err));

  
    
// })

var routes = require('./router/routes');
app.use('/', routes);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

  // app.get('/', (req, res) => {
  //   var cursor = db.collection('users').find().toArray(function(err, results) {
  //       console.log(results)
  //       // send HTML file populated with quotes here
  //     })
  //   res.send("hello world");

  //   // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
  //   // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
  // })

  // app.post('/sign_up', (req, res) => {
  //   db.collection('users').save(req.body, (err, result) => {
  //       console.log(req.body);
  //       if (err) return console.log(err)
    
  //       console.log('saved to database')
  //       res.redirect('/')
  //     })
  // })

  // app.post('/login', (req, res) => {
  //   db.collection('users').save(req.body, (err, result) => {
  //       console.log(req.body);
  //       if (err) return console.log(err)
    
  //       console.log('saved to database')
  //       res.redirect('/')
  //     })
  // })
  module.exports = app;