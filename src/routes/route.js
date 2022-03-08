const express= require("express");
const router=express.Router();

const PC=require("../controllers/productController")
const UC=require("../controllers/userController")
const OC=require("../controllers/orderController")

const Midd=require("../middleware/mid")



router.post("/createProduct",PC.createProdu)
router.post("/createUser",Midd.mid1,UC.createUser);

router.post("createOrder",Midd.mid1,OC.createOrder)



module.exports=router;