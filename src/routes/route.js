const express = require("express");
const router= express.Router();
const UserMid=require("../middleware/userMiddleware")
const UserCon=require("../controllers/userController")
const CC=require("../controllers/bookController")

router.get("/createUsers",UserMid.mid2,UserCon.userCreate);
router.get("/basicApi",UserMid.mid2,UserCon.userCreate);
router.get("/falanaApi",UserMid.mid2,UserCon.userCreate);



//if making global middleware then make route
router.get("/ccc",CC.createBook);

module.exports=router;