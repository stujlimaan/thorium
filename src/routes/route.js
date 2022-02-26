const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userControllers")


router.post("/createBooks", UserController.createBooks )

router.get("/listOfBooks", UserController.getBooks)



module.exports = router;