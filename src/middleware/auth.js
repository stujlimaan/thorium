const tokencheck = async function(req,res,next){
    let token=req.headers["x-auth-token"];
    if(!token){
        return res.send("token is not present please provide valid token")
    }

    else{
        next();
    }

    
}



const authorise=function(req,res,next){
    //compare the logged in user's id and id in requestl
   
    let token=req.headers["x-auth-token"];
      if(!token) return res.send("invalid token");
      let decodedToken = jwt.verify(token,"tujliman-khan");
      let userToBeModified=req.params.userId;
      let userLoggedIn=decodedToken.userId;
      if(userToBeModified != userLoggedIn) return res.send({status:false,msg:"user is not allowed to modified the requeted userId"});
      else{
        next();
      }
    
}


module.exports.tokencheck=tokencheck;
module.exports.authorise=authorise;