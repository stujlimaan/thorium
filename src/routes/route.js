const express =require('express');
const router = express.Router();

router.post('/',(req,res)=>{
    res.send('hello wolr');
})


module.exports = router;