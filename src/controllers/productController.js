const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {
    list: (req, res) =>{
        console.log('Entre al product list');
        res.render('./products/list', {products});    
    },

    productos: (req, res) =>{
        let product =  products.find( product => product.id == req.params.id)
        console.log(product);
        console.log('Entre al productDetail');
        res.render('./products/detail', {product});
    }
}

module.exports = productController;