const axios=require("axios");


const getWeather=async function(req,res){
    try{
        let k=req.query.key;
        let city=req.query.city;
        let key="629471579aeb8f01b5cf7535968d31ec"
        let result =await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        let data=result.data;
        let temp=result.data.main.temp;
        console.log(temp)
        res.status(200).send({msg:data})

    }
    catch(err){
        res.status(500).send(err.message)
    }
}
let getSortedcities = async function (req, res) {
    try {
        let cities = ["Bangalore", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityobj = []
        for (i = 0; i < cities.length; i++) {
            let obj = { city: cities[i] }
            
            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=d722c9e635f5f8054c225aab7be54ba8`
            }
            let result = await axios(options)
            obj.temp = result.data.main.temp
            cityobj.push(obj)
        }
        let sortedCities= cityobj.sort(function (a, b) { return (a.temp - b.temp) })
             res.status(200).send({status:true, data: sortedCities})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

}


module.exports.getWeather=getWeather
module.exports.getSortedcities = getSortedcities;