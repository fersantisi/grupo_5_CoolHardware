const path = require("path");
let productArray = require('../products')

const mainController = {

    home: (req, res) =>{
        console.log('Entre al home');
        res.render('index', {products: productArray});    
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
        let idProducto = req.params.id
        let product = productArray[idProducto]
        console.log('Entre al productDetail');
        res.render('./products/productDetail', {product: product});
    },

    admin: (req, res) => {
        console.log('Entre al admin')
        res.render('./products/manageProducts')
    }
}

module.exports = mainController;