const express =require("express");
// const UserModel=require('./models/userModel')
const UserCont=require("../controllers/userController")
const router=express.Router();

router.get("/create",(req,res)=>{
    let data = req.query;
    console.log(data)
    res.send(data)
})

router.post("/random/:name",function(req,res){
    let data = req.params.name;

    res.send(data);
})

router.post("/book",(req,res)=>{
    res.send("jjhaha");
})

let players=[];
router.post("/players",(req,res)=>{
    let data = req.body;
    let playerName=data.name;
    for(let i=0;i<players.length;i++){
       if(players[i].name==playerName){
           res.send("players aldreaa")
       }
    }
    players.push(data);
    console.log(players)
    res.send(players);
})


router.post("/players/:playersName/bookings/:bookingId",(req,res)=>{
    let name=req.params.playersName ;
    let id=req.params.bookingId;
    let isPlayerPresent=false;
    for(let i=0;i<players.length;i++){
        if(players[i].name==name){
            isPlayerPresent=true
        }
    }
    if(!isPlayerPresent){
        res.send("players not present")
    }
    let booking=req.body
    for(let i=0;i<players.length;i++){
        if(players[i].name==name){
            players[i].bookings.push(booking)
        }
    }
    res.send(name+id);
})


router.get("/name/:name/city/:cityname",(req,res)=>{
    let name=req.params.name;
    let city =req.params.cityname;
    res.send(name+" "+city)
})




//mongooe

router.post("/createuser",UserCont.userC)

router.get("/getuser",UserCont.getData)


module.exports=router;