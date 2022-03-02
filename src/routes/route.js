const express = require('express');
const router = express.Router();

//importing our controller file for use of function that have created
const allController = require('../controllers/allController')

//make a route for a create new author
router.post('/createNewAuthor', allController.createNewAuthor)
//make a route for a create new book
router.post('/createNewBook', allController.createNewBook)
//make a route for getting all books
router.get('/allBooks', allController.allBooks)
//make a route for update your book price and details
router.get('/updatedBookPrice', allController.upadatedBookPrice)
//make a route for getting authors name
router.get('/authorsName', allController.authorsName)

//make public or global for all files for use of
module.exports = router;