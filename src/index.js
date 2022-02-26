const express =require('express');
const bodyParse = require('body-parser');
const mongoose = require("mongoose");
const route = require('./routes/route')
const app=express();


app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:true}));
app.use('/',route);



const port = process.env.PORT || 3001;
app.listen(port,function(){
    console.log(`server is running at ${port}`);
});