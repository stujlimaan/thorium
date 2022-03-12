const axios = require('axios')

const getStates=async function (req,res) { 
    try{
        let result= await axios.get("https://cdn-api.co-vin.in/api/v2/admin/location/states")
        let data=result.data;
        res.status(200).send(data);
        
    }catch(err){
        res.status(500).send(err.message)
    }
    
 }

 const getDistrict=async function(req,res){ 
     try{
         let stateId=req.params.stateId 
         let options={
             method:"get",
             url:`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateId}`

         }
         let result=await axios(options);
         let data=result.data;
         res.status(200).send(data)

     }catch(err){
         res.status(500).send(err.message)
     }
 }


 const getByPin=async function(req,res){
     try{
         let pin=req.query.pincode;
         let date=req.query.date;
         let options={
             method:"get",
             url:`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
         }
         let result = await axios(options);
         let data=result.data;
         res.status(200).send(data)
     }catch(err){
         res.status(500).send(err.message)
     }

 }

 let getByIdDistrict=async function (req,res) { 
     try{
         let dId=req.query.district_id;
         let date=req.query.date;
         let options={
             method:"get",
             url:`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${dId}&date=${date}`
         }
         let result = await axios(options);
         let data=result.data;
         res.status(200).send(data);
         
     }catch(err){
         res.status(500).send(err.message)
     }
  }

  const getOtp=async function (req,res) {
      try{

            let mobile=req.body;
            let options={
                method:"post",
                url:`https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
                data:mobile

            }
            let result =await axios(options);
            res.status(200).send(result.data)
      }catch(err){
          res.status(500).send(err.message)
      }
    }

 module.exports.getStates=getStates
 module.exports.getDistrict=getDistrict
 module.exports.getByPin=getByPin;
 module.exports.getByIdDistrict=getByIdDistrict;
 module.exports.getOtp=getOtp;