const path = require("path");

const mainController = {

    home: (req, res) =>{
        console.log('Entre al home');
        res.sendFile(path.resolve('./src/views/index.html'));    
    },

    login: (req, res) =>{
        console.log('Entre al login');
        res.sendFile(path.resolve('./src/views/login.html'));       
    },

    register: (req, res) =>{
        console.log('Entre al register');
        res.sendFile(path.resolve('./src/views/register.html'));   
    },

    carrito: (req, res) =>{
        console.log('Entre al productCart');
        res.sendFile(path.resolve('./src/views/productCart.html'));     
    },

    productos: (req, res) =>{
        console.log('Entre al productDetail');
        res.sendFile(path.resolve('./src/views/productDetail.html'));
    }
}

module.exports = mainController;