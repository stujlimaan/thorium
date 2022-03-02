const express = require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const { append } = require("express/lib/response");
const route=require("./routes/route")
const app = express();

//make a middleware and use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//connect our database 
mongoose.connect("mongodb+srv://Tujli:mst@cluster0.hlfbs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser:true
})
.then(()=>{console.log("mongodb is connecteed")})
.catch((err)=>{console.log(err)})

//make routing
app.use('/',route)

//creating a server at port no. 3000
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server is running at ${port}`)
});



