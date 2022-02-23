const express =require('express');
const router = express.Router();


router.get('/students/:name',function(req,res){
    let studentName= req.params.name;
    console.log(studentName);
    res.send(studentName);

})

router.get('/', (req, res) => {
    res.send('hello world')
  })


module.exports=router;