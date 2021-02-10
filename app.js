const express=require('express');
var bodyParser=require('body-parser');
const path=require('path');

const app=express();

const adminData=require("./routes/admin");
const shopRoutes=require("./routes/shop");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.set('view engine','ejs');
app.set('views','views');

app.use('/admin',adminData.router);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).render('404',{pageTitle:'Page Not Found 404'});
});



// const routes=require('./routes');

app.listen(3000);