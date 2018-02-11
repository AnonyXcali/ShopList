var ObjectID = require('mongodb').ObjectID

var mongoose = require('mongoose');
 
module.exports = mongoose.model('List',{
    // username: String,
    // password: String,
    // email: String,
    // phone : Number,
    primID : ObjectID,
    username : String,
    listId : Number,
    listname : String,
    listobject : Array
});