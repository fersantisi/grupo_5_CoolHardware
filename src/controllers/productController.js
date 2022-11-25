const path = require("path");
// let productArray = require('../products')

const productController = {

    productos: (req, res) =>{
        let idProducto = req.params.id
        let product = productArray[idProducto]
        console.log('Entre al productDetail');
        res.render('./products/productDetail', {product: product});
    },

}

module.exports = productController;