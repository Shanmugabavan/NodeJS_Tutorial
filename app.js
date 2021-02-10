const express=require('express');
var bodyParser=require('body-parser');

const app=express();

const adminRoutes=require("./routes/admin");
const shopRoutes=require("./routes/shop");
const ErrorController=require("./Controller/ErrorController.js")

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.set('view engine','ejs');
app.set('views','views');

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use(ErrorController.Error404);



// const routes=require('./routes');

app.listen(3000);