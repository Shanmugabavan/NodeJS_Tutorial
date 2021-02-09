const express=require('express');
const router=express.Router();
const path=require('path');
const rootPath=require('../util/path');


router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootPath,'views','add-product.html'));
    // next();
});

router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports=router;