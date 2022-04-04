const express = require("express")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const route=require("./routes/route")
const multer = require("multer")

const app= express()

//middleware parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(multer().any())


mongoose.connect("mongodb+srv://Tujli:mst@cluster0.hlfbs.mongodb.net/BookManagement?retryWrites=true&w=majority",{
    useNewUrlParser:true
})
.then(()=>{console.log("mongodb is connneted")})
.catch(err=>console.log(err.message))

app.use("/",route)

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})