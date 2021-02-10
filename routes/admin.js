const express=require('express');
const router=express.Router();
const path=require('path');
const rootPath=require('../util/path');

const products=[];


router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootPath,'views','add-product.html'));
    // next();
});

router.post('/product',(req,res,next)=>{
    products.push(req.body);
    console.log(products.length);
    res.redirect('/');
});

exports.router=router;
exports.products=products;