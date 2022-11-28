const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const adminController = {

    admin: (req, res) => {
        console.log('Entre al admin');
        res.render('./admin/index', {products})
    },

    create: (req, res) => {
        console.log('Entre al creador');
        res.render('./admin/createProduct');
    }
}

module.exports = adminController;