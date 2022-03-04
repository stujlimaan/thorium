const express = require("express");
const bodyParser=require("body-parser");
const route = require("./routes/route")

const date = require("date-and-time");//
var ip = require("ip");

const app =express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//if you are making global middleware

// app.use(function (req, res,next) {
//   var url = req.url;
//   var method =req.method;
//   const now = new Date();
//   const value = date.format(now, "YYYY-MM-DD HH:mm:ss");
//   const ipad = ip.address();
//   console.log("after middlewaree call \n", value, ",", ipad, ",", url,',',method);
//   res.send("after middleware hit");
//   next();
// });

//end with global middleware

app.use("/",route)


const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})