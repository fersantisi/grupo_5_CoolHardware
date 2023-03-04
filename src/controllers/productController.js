const db = require('../database/models')
const { sequelize } = require("../database/models");
const Op = db.Sequelize.Op;

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
            include: ['brand', 'category']
        })
        .then(function(product){
            res.render('./products/detail', {product});
        })
        .catch(error => console.log(error))
    },

    search: async (req,res) => {
        let products = await db.Product.findAll({
            where: {
                [Op.or]:{
                name: {[Op.like]:`%${req.query.search}%`},
                '$category.name$': {[Op.like]:`%${req.query.search}%`},
                '$brand.name$': {[Op.like]:`%${req.query.search}%`},
                }
        },
            include: ['brand', 'category']
        })
        res.render('./products/list', {products});    
    }
}

module.exports = productController;