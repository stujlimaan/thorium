const User = require("../models/userModel");


const  createUser=async function(req,res){
    let data = req.body; //get all from request body
    let saveData=await User.create(data);//save in the database
    res.send(saveData);
} 

//public
module.exports.createUser=createUser;