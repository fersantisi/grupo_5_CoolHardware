const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const adminController = {


    admin: (req, res) => {
        console.log('Entre al admin');
        res.render('./products/manageProducts');
    }
}

module.exports = adminController;