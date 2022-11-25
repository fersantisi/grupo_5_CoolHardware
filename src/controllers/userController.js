const path = require("path");
// let userArray = require('../products')

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