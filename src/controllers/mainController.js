const path = require("path");

const mainController = {

    home: (req, res) =>{
        console.log('Entre al home');
        return res.render(('index'));    
    },

    login: (req, res) =>{
        console.log('Entre al login');
        res.render('./users/login');       
    },

    register: (req, res) =>{
        console.log('Entre al register');
        res.render('./users/register');   
    },

    carrito: (req, res) =>{
        console.log('Entre al productCart');
        res.render('./products/productCart');     
    },

    productos: (req, res) =>{
        console.log('Entre al productDetail');
        res.render('./products/productDetail');
    }
}

module.exports = mainController;