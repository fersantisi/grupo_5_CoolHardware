const fs = require('fs');
const path = require('path');
const db = require("../../database/models")

// const productsFilePath = path.join(__dirname, '../data/products.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {
    list: (req, res) =>{
    console.log('Entre al product list');
    db.Products.findAll({
        include: [{association: 'discount'}, {association: 'brand'}]
    })
    .then(function(products){
        console.log(products)
        res.render('./products/list', {products});    
    })
    .catch(error => console.log(error))
    },

    productos: (req, res) =>{
        console.log('Entre al productDetail');
        db.Products.findByPk(req.params.id, {
            include: [{association: 'discount'}, {association: 'brand'}]
        })
        .then(function(product){
            console.log(product.discount)
            res.render('./products/detail', {product});
        })
        .catch(error => console.log(error))
    }
}

module.exports = productController;