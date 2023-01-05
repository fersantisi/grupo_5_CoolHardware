const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


const userController = {

    login: (req, res) => {
        console.log('Entre al login');
        res.render('./users/login');
    },

    loginProcess: (req, res) => {
        let userRequest = {
            ...req.body
        }

        let userFound = users.find(user => {
            return user.username == userRequest.user
        });

        if (userFound) {
            if (bcrypt.compareSync(userRequest.pass, userFound.pass)) {
                return res.send('Usuario logueado')
            } else {
                return res.render('./users/login', { error: 'Tus credenciales no son válidas' })
            }
        } else {
            return res.render('./users/login', { error: 'Tus credenciales no son válidas' })
        }
    },

    register: (req, res) => {
        console.log('Entre al register');
        res.render('./users/register');
    },

    generateId: function () {
        console.log("Entré al generateId");
        let lastUser = users.pop();
        if (lastUser) {
            return lastUser.id + 1;
        } else {
            return 1;
        }
    },

    store: (req, res) => {
        const result = validationResult(req)
        if (result.errors.length > 0) {
            return res.render('./users/register', { errors: result.mapped(), oldData: req.body })
        }
        let newUser = {
            "id": this.generateId,
            // "id": users[users.length-1].id ? users[users.length-1].id + 1 : 1,
            "firstname": req.body.firstname,
            "lastname": req.body.lastname,
            "username": req.body.username,
            "email": req.body.email,
            "pass": bcrypt.hashSync(req.body.pass, 10),
            "image": req.file.filename
        }

        // console.log(newUser);


        // console.log(newUser.id);

        let checkUsername = users.find((user) => {
            return user.username == newUser.username;
        })

        let checkEmail = users.find((user) => {
            return user.email == newUser.email;
        })

        if (checkUsername) {
            return res.send("Este usuario ya está registrado!");
        } else if (checkEmail) {
            return res.send("Este email ya está registrado!");
        } else {
            users.push(newUser)
            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, '\t'));
            return res.render('index', { products })
        }
    },

    delete: (id) => {
        let updatedList = users.filter((user => user.id !== id));
        fs.writeFileSync(usersFilePath, JSON.stringify(updatedList, null, '\t'));
        res.send(updatedList);
    }
}

module.exports = userController;