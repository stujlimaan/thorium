const express = require('express');
const router=express.Router();
const weather=require("../controllers/weatherController")
const MemeController= require("../controllers/memeController");

router.get("/weather",weather.getWeather)
router.get("/getSortedcities", weather.getSortedcities)
router.post("/createMemes", MemeController.createMemes)


module.exports=router;