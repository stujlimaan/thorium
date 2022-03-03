const Book=require("../models/newBookModel");
const Author=require("../models/newAuthorModel");
const Publisher=require("../models/newPublisherModel");
const createBook=async function(req,res){
    let data=req.body;
    let authorId=data.author;
    let publisherId=data.publisher;
    if(!authorId){
       return  res.send("this is required")
    }
    let author=await Author.findById(authorId);
    if(!author){
        return res.send("not valid as no author is present with the given author id")
    }
    let publisher=await Publisher.findById(publisherId);
    if(!publisher){
        return res.send("not valid as no author is present with the given author id")
    }

    let savaData= await Book.create(data);
    res.send(savaData);
    

}

const getBook=async function(req,res){
    let allBooks=await Book.find().populate("author publisher");
    // let data=await Book.find();
    res.send(allBooks);
}



module.exports.createBook=createBook;
module.exports.getBook=getBook;
// module.exports.allBooks=allbooks;