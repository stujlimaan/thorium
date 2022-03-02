const mongoose =require('mongoose');

//make schema for book store
const bookSchema =new mongoose.Schema({
    name:String,
    author_id:{
        type:Number,  //this field is mandatory for id
        required:true
    },
    price:Number,
    ratings:Number

},{timestamps:true});

//make a collection or create collection through mongoose
module.exports=mongoose.model("Book",bookSchema);
