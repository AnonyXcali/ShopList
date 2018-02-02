const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
var db;

app.use(bodyParser.urlencoded({extended: true}))

MongoClient.connect('mongodb://admin_s:agithasadA1@ds123658.mlab.com:23658/shop_list_database', (err, client) => {
if(err) return console.log(err)
db = client.db('shop_list_database')
app.listen(3000, function() {
        console.log('listening on 3000')
      })
    
})

  app.get('/', (req, res) => {
    var cursor = db.collection('test_push').find().toArray(function(err, results) {
        console.log(results)
        // send HTML file populated with quotes here
      })
    res.send("hello world");

    // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
    // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
  })

  app.post('/test', (req, res) => {
    db.collection('test_push').save(req.body, (err, result) => {
        console.log(req.body);
        if (err) return console.log(err)
    
        console.log('saved to database')
        res.redirect('/')
      })
  })