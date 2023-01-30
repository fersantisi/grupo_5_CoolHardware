const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const db = require('../../database/models')
const express = require('express');
const router = express.Router();

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


// const usersFilePath = path.join(__dirname, '../data/users.json');
// const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));




const userController = {

    login: (req, res) => {
        console.log('Entre al login');
        res.render('./users/login');
    },

    loginProcess: (req, res) => {
        let userRequest = {
            ...req.body
        }

        let userFound = Users.find(user => {
            return user.username == userRequest.user
        });

        console.log("found", userFound);
        if (userFound) {
            console.log("request", userRequest);
            if (bcrypt.compareSync(userRequest.pass, userFound.pass)) {
                // delete userFound.pass
                req.session.userLogged = userFound;
                return res.redirect('/')

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

    store: (req, res) => {
        const result = validationResult(req);
        if (result.errors.length > 0) {
            return res.render("./users/register", {
                errors: result.mapped(),
                oldData: req.body
            });
        }
        const newUser = db.Users.create({
            Fname: req.body.firstname,
            Lname: req.body.lastname,
            nickname: req.body.username,
            email: req.body.email,
            password_id: bcrypt.hashSync(req.body.pass, 10),
            // "image": req.file.filename
        })

        function checkUsername(username) {
            let user = db.Users.findOne({ where: { nickname: username } })
            return user;
        }

        function checkEmail(email) {
            let user = db.Users.findOne({ where: { email: email } })
            return user;
        }

        function register(username, email, db) {
            let existingUsername = checkUsername(username);
            let existingEmail = checkEmail(email);

            if (existingUsername || existingEmail) {
                if (existingUsername) {
                    return "El nombre de usuario ya existe";
                }
                if (existingEmail) {
                    return "El correo electrónico ya está registrado";
                }
            } else {
                db.Users.create({ newUser });
                return res.redirect("/user/login");
            }
        }
        
    },

    delete: (id) => {
        let updatedList = Users.filter((user => user.id !== id));
        fs.writeFileSync(usersFilePath, JSON.stringify(updatedList, null, '\t'));
        res.send(updatedList);
    },

    logout: (req, res) => {
        delete req.session.userLogged
        return res.redirect('/');
    }
}

module.exports = userController;