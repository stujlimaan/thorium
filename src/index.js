const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



mongoose.connect("mongodb+srv://Tujli:mst@cluster0.hlfbs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser:true
})
.then(()=>{console.log("mongodb is connected")})
.catch((err)=>{console.log(err)})


app.use('/', route)


const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("server is running"+port)
})