const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const adminController = {

    admin: (req, res) => {
        console.log('Entre al admin');
        res.render('./admin/adminIndex', {products})
    },

    create: (req, res) => {
        console.log('Entre al creador');
        res.render('./admin/createProduct');
    },

    store: (req, res) => {
        let newProduct = {
            "id": products[products.length-1].id + 1,
            "name": req.body.name,
            "price": req.body.price,
            "stock": req.body.stock,
            "description": req.body.description
        }

        products.push(newProduct);

		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, '\t'));

        res.render('./admin/adminIndex', {products})
    }
    ,

    users: (req, res) => {
        console.log('Entre al registro de perfiles');
        res.render('./admin/userAdmin');
    }   
}

module.exports = adminController;