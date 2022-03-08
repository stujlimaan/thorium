const Product = require("../models/productModel")

const createProdu=async function(req,res){
    let data = req.body;
    let savaData= await Product.create(data);
    res.send(savaData);
}


module.exports.createProdu=createProdu;