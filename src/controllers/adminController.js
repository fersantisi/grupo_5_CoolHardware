const path = require("path");
// let productArray = require('../products')

const adminController = {


    admin: (req, res) => {
        console.log('Entre al admin');
        res.render('./products/manageProducts');
    }
}

module.exports = adminController;