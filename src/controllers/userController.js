const userC=async (req,res)=>{
    let data=req.body;
    let saveData = await UserModel.create(data);
    res.send(saveData)
};

const getData=async (req,res)=>{
    // let data=await UserModel.findOne();
    // let data = await UserModel.findOneAndUpdate({"age":12},{$set:{"age":8}})
    // let data1=await UserModel.find();
    let bb=await UserModel.aggregate([{$group:{_id:"$by_user",age:{$sum:1}}}])
    
    res.send(bb);
}

module.exports.userC=userC;
module.exports.getData=getData;