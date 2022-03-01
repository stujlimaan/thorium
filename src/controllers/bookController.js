const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook = async (req, res)=>{
    const data = req.body; 
    const dataRes = await BookModel.create(data); 
    res.send({
        msg: dataRes
    }); 
}

const bookList = async (req, res)=>{
    const dataRes = await BookModel.find().select({
        'bookName': 1,
        'authorName': 1,
        '_id': 0
    }); 
    res.send({
        msg: dataRes
    }); 
}

const getBooksInYear = async (req, res)=>{
    const year = req.body.year; 
    const dataRes = await BookModel.find({
        'year': year
    }).select({
        'bookName': 1,
        '_id': 0
    }); 
    res.send({
        msg: dataRes
    });
}

const getParticularBooks = async (req, res)=>{
    const data = req.body; 
    const dataRes = await BookModel.find(data).select({
        'bookName': 1,
        '_id': 0
    }); 
    res.send({
        msg: dataRes
    });
}


    const getXINRBooks = async function(req,res){
    let xinrBooks =  await BookModel.find({"prices.indianPrice" : {$in : ["Rs. 500","Rs. 200","Rs. 100"]}})
    res.send(xinrBooks)
}


    const getRandomBooks = async function(req,res){
        let randomBooks = await BookModel.find({ $or:[{stockAvailable:true},{totalPages: {$gt:500}}]})
        res.send(randomBooks)
    }



module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks