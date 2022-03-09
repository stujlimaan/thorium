const tokencheck = async function(req,res,next){
    let token=req.headers["x-auth-token"];
    if(!token){
        return res.send("token is not present please provide valid token")
    }

    else{
        next();
    }

    
}

module.exports.tokencheck=tokencheck;