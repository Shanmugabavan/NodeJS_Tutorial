// const adminProduct=require('./admin')
const products=[];
exports.getAddProduct=(req,res,next)=>{
    // res.sendFile(path.join(rootPath,'views','add-product.html'));
    res.render('add-product',{
        title:'Add Product',
    });
    // next();
};

exports.getPushProduct=(req,res,next)=>{
    products.push(req.body);
    console.log(products.length); 
    res.redirect('/');
};

exports.getProducts=(req,res,next)=>{
    console.log(products)
    console.log(products.length)
    res.render('shop',{
        products:products,
        title:"shop",
    });
}
