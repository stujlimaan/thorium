const express =require('express');
const bodyParse = require('body-parser');
const {default:mongoose} = require("mongoose");
const route = require('./routes/route')
const app=express();


app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://Tujli:mst@cluster0.hlfbs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))
app.use('/', route);






app.listen(process.env.PORT || 3002, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3002))
});