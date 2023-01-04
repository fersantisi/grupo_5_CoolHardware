const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


const userController = {

    login: (req, res) => {
        console.log('Entre al login');
        res.render('./users/login');
    },

    signin: (req,res) => {
        
    },

    register: (req, res) => {
        console.log('Entre al register');
        res.render('./users/register');
    },

    store: (req, res) => {
        let newUser = {
            "firstname": req.body.firstname,
            "lastname": req.body.lastname,
            "username": req.body.username,
            "email": req.body.email,
            "pass": bcrypt.hashSync(req.body.pass, 10),
            "passconfirm": req.body.confirmpass,
            "image": req.file.filename
        }

        let checkUsername = users.find((user) => {
            return user.username == newUser.username;
        })

        let checkEmail = users.find((user) => {
            return user.email == newUser.email;
        })

        if (checkUsername) {
            return res.send("Este usuario ya está registrado!");
        } else if(checkEmail) {
            return res.send("Este email ya está registrado!");
        }else{
            users.push(newUser)
            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, '\t'));
            return res.render('index', {products})
        }
    
}
}

module.exports = userController;