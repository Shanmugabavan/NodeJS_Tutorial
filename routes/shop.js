const express=require('express');
const router=express.Router();
const path=require('path');
const rootPath=require('../util/path');
const productController=require('../Controller/ProductController.js');


router.get('/',productController.getProducts);

module.exports=router;