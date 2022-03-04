const express= require("express");
const router= express.Router();
const CreateBook=require("../controllers/bookController")
const CreatePublisher=require("../controllers/publisherController");
const CreateAuthor=require("../controllers/authorController");

//make route for crate new book
router.post("/createNewBook",CreateBook.createBook);
router.get("/getBook",CreateBook.getBook);

   
//make route author
router.post("/createAuthor",CreateAuthor.createAuthor)


//make route publisher
router.post("/createPublisher",CreatePublisher.createPublisher);

//make put api
router.put("/putBook", CreateBook.putBook)
router.put("/updatePrice", CreateBook.updatePrice)



//make public or global for use of 
module.exports = router