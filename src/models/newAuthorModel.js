const mongoose=require("mongoose");

const newAuthorSchema=mongoose.Schema({
        authorName:{
                type:String,
                required:true
            },
            age:Number,
            address:String
})


module.exports=mongoose.model("newAuthor",newAuthorSchema);