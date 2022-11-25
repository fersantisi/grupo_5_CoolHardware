const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {

    productos: (req, res) =>{
        // let idProducto = req.params.id
        // let product = productArray[idProducto]
        let product =  products.find( product => product.id == req.params.id)
        console.log('Entre al productDetail');
        res.render('./products/detail', {product});
    },

}

module.exports = productController;