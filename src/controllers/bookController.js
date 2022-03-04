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

const putBook = async function (req, res) {
    const update = await BookModel.updateOne({ $or: [{"newBook": "6622112781f39c71bb87c1391"},]}, {"isHardCover": true}, {new: true})
    res.send(update)
} 

const updatePrice = async function (req, res) {
    const newPrice = await BookModel.updateMany({ rating: {$gte: 3.5}},{price:100},{new: true})
    res.send(newPrice)
}

module.exports.createBook=createBook;
module.exports.getBook=getBook;
module.exports.putBook = putBook
module.exports.updatePrice = updatePrice

// module.exports.allBooks=allbooks;