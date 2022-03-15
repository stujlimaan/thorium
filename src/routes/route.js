const express= require("express")
const router = express.Router()
const AU=require ("../controllers/authorController")
const BU=require ("../controllers/blogsController")

const mid=require("../middleware/auth")



router.post ("/authors",AU.createAuthor)
router.post ("/blog",mid.authentication,BU.createBlog)
router.get("/getBlogsData",mid.authentication ,BU.getblogs)
router.put("/updateBlogsData",mid.authentication,mid.authorization ,BU.updateBlog)
router.delete("/deleteBlog",mid.authentication,mid.authorization ,BU.deleteUser)
router.delete("/deleteSpecific",mid.authentication,mid.authorization ,BU.deleteSpecificItem)

router.post("/login",AU.login)


module.exports=router;