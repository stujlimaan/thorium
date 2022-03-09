const mongoose = require("mongoose")

const LoginSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    mobile:Number,
    emailId:String,
    password:String,
    gender:{
        type:String,
        enum:['male','female','other'],
        isDeleted:false
    },
    age:Number,
    posts:{type:[],default:[]},
    isDeleted:{
        type:Boolean,
    default:false}
    
})

module.exports=mongoose.model("AuthUser",LoginSchema);