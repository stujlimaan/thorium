const express = require('express');
const router=express.Router();
const Cowin=require("../controllers/cowinController")

router.get("/cowin/states",Cowin.getStates)
router.get("/cowin/state/:stateId",Cowin.getDistrict)
router.get("/cowin/districts",Cowin.getByPin)
router.get("/cowin/findByIdDistrict",Cowin.getByIdDistrict)
router.post("/cowin/genOtp",Cowin.getOtp)


module.exports=router;