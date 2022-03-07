const express = require("express");
const bodyParser =require("body-parser")
const route=require("./routes/route");
const { default: mongoose } = require("mongoose");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use('/',(req,res,next)=>{
    console.log("middleware")
    next();
},function(req,res){
    console.log("e");
    res.send("hhhhhhhhhh");
})


// app.get('/',)

app.use("/",route)

mongoose.connect("mongodb+srv://Tujli:mst@cluster0.hlfbs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser:true
})
.then(()=>{console.log("mongodb is connected")})
.catch((err)=>{console.log(err)})


const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("server is running"+port)
})