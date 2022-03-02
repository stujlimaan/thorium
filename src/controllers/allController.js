//importing authorModel and bookmodel for use of this file
const authorModel = require('../models/authorModel')
const bookModel = require('../models/bookModel')

//making a function creating a new author
const createNewAuthor = async function (req,res) {
    const reqAuthor = req.body;
    const SavedData = await authorModel.create(reqAuthor)
    res.send( {msg : SavedData})
    
}

//making a function creating a new book
const createNewBook = async function (req,res) {
    const reqBook = req.body;
    const Saved = await bookModel.create(reqBook)
    res.send( {msg : Saved})
    
}

//making a function getting all books with name chetan
const allBooks = async function(req, res) {
    const authorDetails = await authorModel.find({author_name: "Chetan Bhagat"})
    const id = authorDetails[0].author_id
    const booksName = await bookModel.find({author_id: id}).select({name:1})
    res.send( {msg:booksName})
}

//making a function update your book price
const upadatedBookPrice = async function (req, res) {
    const bookDetails = await bookModel.find({name:"Two states"})
    const id = bookDetails[0].author_id
    const authorN = await authorModel.find({author_id:id}).select({author_name:1, _id:0})

    const bkName = bookDetails[0].name
    const updatedPrice = await bookModel.findOneAndUpdate({name:bkName}, {price:100},{new:true}).select({price:1, _id:0})

    res.send({msg:authorN, updatedPrice})

}

//making a function and getting authorName
const authorsName = async function (req,res) {
    const booksId= await bookModel.find({price: {$gte:50, $lte:100}}).select({author_id:1, _id:0})
    const id = booksId.map(inp => inp.author_id)
   
    let temp =[]
    for(let i=0; i<id.length; i++) {
        let x = id[i]
        const author = await authorModel.find({author_id:x}).select({author_name:1, _id:0})
        temp.push(author)
    }

   const authorName = temp.flat()

  res.send({msg:authorName})
}

//make all function public for use for of another files
module.exports.createNewAuthor = createNewAuthor
module.exports.createNewBook = createNewBook
module.exports.allBooks = allBooks
module.exports.upadatedBookPrice = upadatedBookPrice
module.exports.authorsName = authorsName