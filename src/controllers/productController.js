const db = require('../database/models')
const { sequelize } = require("../database/models");

const productController = {
    list: (req, res) =>{
    console.log('Entre al product list');
    db.Product.findAll({
        include: ['brand', 'category']
    })
    .then(function(products){
        console.log('Entre al product list');
        res.render('./products/list', {products});    
    })},

    productos: (req, res) =>{
        console.log('Entre al productDetail');
        db.Product.findByPk(req.params.id, {
            include: ['brand']
        })
        .then(function(product){
            res.render('./products/detail', {product});
        })
        .catch(error => console.log(error))
    }
}

module.exports = productController;