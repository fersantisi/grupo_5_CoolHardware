const fs = require('fs');
const path = require('path');
//DB
const db = require('../../database/models');
const { sequelize } = require("../../database/models");

// const productsFilePath = path.join(__dirname, '../data/products.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {

    home: async (req, res) =>{
        console.log('Entre al home');
        let products = await db.Product.findAll({
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