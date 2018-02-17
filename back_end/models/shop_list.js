var uuid = require('uuid');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var List = new Schema({
    listId : Number,
    listContent :[
        {   
            _id : Number,
            itemName : String


        }
    ]

});

module.exports = mongoose.model('List',List);
