const express = require('express');
const router=express.Router();


router.get('/movies',(req,res)=>{
    const movi=['3-idiots','sultan','kick'];
    res.send(movi)
});

router.get('/movies/:index',(req,res)=>{
    const movi=['sultan','kick','tiger'];
    const val=req.params.index;
    res.send(movi[val]);
});

router.get('/movies/:index',(req,res)=>{
   const movi=['sultan','kick','tiger'];
    const val=req.params.index;
    if (val>movi.length-1){
       res.send("error, use a valid index")
   }
   else{
       res.send(movi[val])
   }
});

router.get('/films',(req,res)=>{
    const film=[ {
       id: 1,
       name: 'The Shining'
      }, {
       id: 2,
       name: 'Incendies'
      }, {
       id: 3,
       name: 'Rang de Basanti'
      }, {
       id: 4,
       name: 'Finding Demo'
      }];
      res.send(film)
      
});

router.get('/films/:index',(req,res)=>{
   const film=[ {
      id: 1,
      name: 'The Shining'
     }, {
      id: 2,
      name: 'Incendies'
     }, {
      id: 3,
      name: 'Rang de Basanti'
     }, {
      id: 4,
      name: 'Finding Demo'
     }];

     let i = req.params.index;
     if(index>film.length-1)
     {
         res.send("No movie exists with this id");           
     }
     else
     {
         res.send(film[i-1]);
     }
     res.send(film)
     
})

module.exports = router;