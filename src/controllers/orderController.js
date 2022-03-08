const Order= require("../models/orderModel");


const createOrder=async function(req,res){
    let userid= req.body.userId //get user id from the request body
    let productid= req.body.productId // get product id from the request body
    let data= req.body //get all data
    let header= req.headers //get headers from request body
    //varify productid and userid 
    const userVerified= await UserModel.find({_id:userid}).select({_id:1})
    const productVerified= await ProductModel.find({_id:productid}).select({_id:1})
    
//check if length>0  and
    if(userVerified.length>0 && productVerified.length>0){
        if (header["isfreeappuser"]==="true"){
            data.amount=0
            data.isFreeAppUser=true
            const result= await OrderModel.create(data)
            res.send({newOrder: result})
        }
        else if (header["isfreeappuser"]==="false") {                                                
            const price= await ProductModel.find({_id:productid}).select({price:1, _id:0})
            const newprice= price[0].price
            const bal= await UserModel.find({_id:userid}).select({balance:1, _id:0})
            const newbalance= bal[0].balance
            
            if(newbalance>=newprice){                                                                          
                const newBal= UserModel.find({_id:userid},{$set:{balance:(newbalance-newprice)}},{$new:true})
                data.amount= newprice
                data.isFreeAppUser= false
                const outcome= await OrderModel.create(data)
                res.send({newOrd: outcome})
            }
            else {
                res.send("The user does not have sufficient balance to place the order")
            }

        }


    }
    else {res.send("The user or The product does  not exist")}



}   




module.exports.createOrder=createOrder