const express=require('express');
const router=express.Router();
const path=require('path');
const rootPath=require('../util/path');

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootPath,'views','shop.html'))
});

module.exports=router;