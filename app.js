const express = require("express");
const app = express();
const path = require("path");

const PORT = 3030


app.listen(PORT, console.log('sv corriendo en el puerto ' + PORT));

app.use(express.static('public'));

app.get("/",(req, res) =>{
    console.log('Entre al home');
    res.sendFile(path.resolve('./views/index.html'));
    
});

app.get("/login",(req, res) =>{
    console.log('Entre al login');
    res.sendFile(path.resolve('./views/login.html'));
    
});

app.get("/productCart",(req, res) =>{
    console.log('Entre al productCart');
    res.sendFile(path.resolve('./views/productCart.html'));
    
});

app.get("/productDetail",(req, res) =>{
    console.log('Entre al productDetail');
    res.sendFile(path.resolve('./views/productDetail.html'));
    
});

app.get("/register",(req, res) =>{
    console.log('Entre al register');
    res.sendFile(path.resolve('./views/register.html'));
    
});

