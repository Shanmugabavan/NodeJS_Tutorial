const express=require('express');
const router=express.Router();
const path=require('path');
const rootPath=require('../util/path');

const productController=require('../Controller/ProductController.js')




router.get('/add-product',productController.getAddProduct);

router.post('/product',productController.getPushProduct);

module.exports=router;