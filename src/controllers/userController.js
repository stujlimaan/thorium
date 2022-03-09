const User=require("../models/userModel");
const jwt=require("jsonwebtoken");

const register=async function(req,res){
    let data = req.body;
    let saveData = await User.create(data);
    res.send(saveData);
}


const login=async function(req,res){
        let userEmail=req.body.emailId;
        let password=req.body.password;

        let user=await User.findOne({emailId:userEmail,password:password});
        if(!user){
            return res.send("emailId and password not correct")
        }


        //genrate token
         let token = jwt.sign({userId:user._id.toString()},"tujliman-khan");
         console.log(token);
         res.send(token)
        

}


const getUser=async function (req,res) {
            let token=req.headers["x-auth-token"];
            if(!token){
                return res.send("token is not valid")
            }
            if(token){
                return res.send("token is valid")
            }

            let decodedToken=jwt.verify(token,"tujliman-khan");
            if(!decodedToken){
                return res.send("token is not valid please try again")
            }
            let userId=req.params.userId;
            let userDetails=await User.findById(userId);
            if(!userDetails){
                return res.send("user does not exist")
            }

            res.send({status:true,msg:userDetails});
  }

  const deleteUser=async function (req,res) {
      let userid=req.params.userId;
      let Deleteuser=await User.findOneAndUpdate({_Id:userid},{$set:{isDeleted:true}},{$new:true})
      res.send({data:Deleteuser});
    }

const userUpdateDetails=async function(req,res){
let userid=req.params.userId;
let user=await User.findById(userid);
if(!user){
    return res.send("user does not exists");
}

let userdata=req.body;

let updateU=await User.findOneAndUpdate({_id:userid},userdata,{$new:true})
res.send({data:updateU})



}

module.exports.register=register;
module.exports.login=login;
module.exports.getUser=getUser;
module.exports.userUpdateDetails=userUpdateDetails;
module.exports.deleteUser=deleteUser;