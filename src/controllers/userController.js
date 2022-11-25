const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const userController = {

    login: (req, res) =>{
        console.log('Entre al login');
        res.render('./users/login');       
    },

    register: (req, res) =>{
        console.log('Entre al register');
        res.render('./users/register');   
    },

}

module.exports = userController;