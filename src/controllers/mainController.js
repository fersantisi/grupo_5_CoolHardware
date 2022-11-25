const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {

    home: (req, res) =>{
        console.log('Entre al home');
        res.render('index', {products});    
    },

    carrito: (req, res) =>{
        console.log('Entre al productCart');
        res.render('/cart');     
    }
}

module.exports = mainController;