const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');

const app=express();

const adminData=require("./routes/admin");
const shopRoutes=require("./routes/shop");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.use('/admin',adminData.router);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});



// const routes=require('./routes');

app.listen(3000);