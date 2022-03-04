const express = require("express");

const mid2=function(req,res,next){
    console.log("middleware one is hit")
    // res.send("middle one is hit")
    next();
}



module.exports.mid2=mid2



