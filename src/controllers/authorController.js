const Author=require("../models/newAuthorModel");

const createAuthor=async function(req,res){
    let data = req.body;
    let saveData=await Author.create(data);
    res.send(saveData);
};

module.exports.createAuthor=createAuthor;
