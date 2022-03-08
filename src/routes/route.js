const express= require("express");
const router=express.Router();

const PC=require("../contollers/productController")
const UC=require("../contollers/userController")
const OC=require("../contollers/orderController")

const Midd=require("../middleware/mid")



router.post("/createProduct",PC.createProdu)
router.post("/createUser",Midd.mid1,UC.createUser);

router.post("createOrder",Midd.mid1,OC.createOrder)



module.exports=router;