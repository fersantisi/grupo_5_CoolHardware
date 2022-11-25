const path = require("path");
// let productArray = require('../products')
let productArray = []

const mainController = {

    home: (req, res) =>{
        console.log('Entre al home');
        res.render('index', {products: productArray});    
    },

    carrito: (req, res) =>{
        console.log('Entre al productCart');
        res.render('./products/productCart');     
    }
}

module.exports = mainController;