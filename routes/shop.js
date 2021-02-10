const express=require('express');
const router=express.Router();
const path=require('path');
const rootPath=require('../util/path');
const adminProduct=require('./admin')

router.get('/',(req,res,next)=>{
    console.log(adminProduct.products)
    console.log(adminProduct.products.length)
    res.render('shop',{
        products:adminProduct.products,
        title:"shop",
    });
});

module.exports=router;