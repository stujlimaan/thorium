const express= require("express")
const router = express.Router()
const AU=require ("../controllers/authorController")
const BU=require ("../controllers/blogsController")
const {emailValidator,check}=require('express-validator')






router.post ("/authors",check('email', 'Invalid email address').isEmail()
,AU.createAuthor)
router.post ("/blog",BU.createBlog)
router.get("/getBlogsData", BU.getblogs)
router.put("/updateBlogsData", BU.updateBlog)
router.delete("/deleteBlog",BU.deleteUser)


module.exports=router;