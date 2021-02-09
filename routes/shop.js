const express=require('express');
const router=express.Router();
const path=require('path');
const rootPath=require('../util/path');
const adminProduct=require('./admin')

router.get('/',(req,res,next)=>{
    console.log(adminProduct.products)
    res.sendFile(path.join(rootPath,'views','shop.html'));
});

module.exports=router;