const Publisher=require("../models/newPublisherModel");

const createPublisher=async function(req,res){
    let data =req.body
    let savaData= await Publisher.create(data);
    res.send(savaData);

}

module.exports.createPublisher=createPublisher;