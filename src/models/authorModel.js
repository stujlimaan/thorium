const mongoose = require("mongoose");

//make a schema for author store
const authorSchema = new mongoose.Schema({

    author_id:{
        type:Number,//this is mandatory field 
        required:true
    },
    author_Name:String,
    age:Number,
    address:String
},{timestamps:true});


//create a collection with name authors
module.exports = mongoose.model('Authors',authorSchema);