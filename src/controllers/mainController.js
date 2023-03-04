//DB
const db = require('../database/models');
const { sequelize } = require("../database/models");
const Op = db.Sequelize.Op;

const mainController = {

    home: async (req, res) =>{
        console.log('Entre al home');

        let products = await db.Product.findAll({
            where: {
                discount: {
                    [Op.gt]: 0
                }
            },
            limit: 4,
            include: ['brand', 'category']
        })
        await res.render('index', {products});    
    },

    carrito: (req, res) =>{
        console.log('Entre al productCart');
        res.render('./cart');     
    }
}

module.exports = mainController;