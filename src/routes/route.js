const express= require("express")
const router = express.Router()
const AU=require ("../controllers/authorController")
const BU=require ("../controllers/blogsController")



router.post ("/authors",AU.createAuthor)
router.post ("/blog",BU.createBlog)
router.get("/getBlogsData", BU.getblogs)
router.put("/updateBlogsData", BU.updateBlog)
router.delete("/deleteBlog",BU.deleteUser)
router.delete("/deleteSpecific",BU.deleteSpecificItem)


module.exports=router;