const path = require("path");
let products = require('../products')

const mainController = {

    home: (req, res) =>{
        console.log('Entre al home');
        res.render('index', {products: products});    
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
    },

    admin: (req, res) => {
        console.log('Entre al admin')
        res.render('./products/manageProducts')
    }
}

module.exports = mainController;