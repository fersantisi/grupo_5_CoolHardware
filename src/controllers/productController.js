const db = require("../../database/models")

const productController = {
    list: (req, res) =>{
    console.log('Entre al product list');
    db.Products.findAll()
    .then(function(products){
        res.render('./products/list', {products});    
    })
    .catch(error => console.log(error))
    },

    productos: (req, res) =>{
        console.log('Entre al productDetail');
        db.Products.findByPk(req.params.id)
        .then(function(product){
            res.render('./products/detail', {product});
        })
        .catch(error => console.log(error))
    }
}

module.exports = productController;