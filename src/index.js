const express = require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const route = require("./routes/route")

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//mongodb connect
mongoose.connect("mongodb+srv://Tujli:mst@cluster0.hlfbs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser:true
})
.then(()=>{console.log("mongodb is connected")})
.catch((err)=>{console.log(err)});

//routing 
app.use("/",route);



//create server at port no. 3000;
const port =process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
});
