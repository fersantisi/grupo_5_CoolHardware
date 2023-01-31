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
        const login = (username, password, db) => {
            let existingUser = db.Users.findAll({ where: { nickname: username } });
            if (existingUser) {
                let match = bcrypt.compareSync(password, existingUser.password_id);
                if (match) {
                    req.session.userLogged = existingUser;
                    return res.redirect("index");
                } else {
                    return res.render("./users/login", { error: "La contraseña es incorrecta" });
                }
            } else {
                res.redirect("/user/register");
            }
        };
        login(req.body.username, req.body.pass, db);
    }
    ,

    register: (req, res) => {
        console.log('Entre al register');
        res.render('./users/register');
    },

    store: (req, res) => {
        function checkUsername(firstname) {
            let user = db.Users.findOne({ where: { Fname: firstname } });
            if (user && user.Fname === firstname) {
                console.log("Este nombre de usuario ya es existente!");
                return true;
            }
            return false;
        }

        function checkEmail(email) {
            let user = db.Users.findOne({ where: { email: email } });
            if (user && user.email === email) {
                console.log("Este correo electrónico ya está registrado");
                return true;
            }
            return false;
        }

        function register(firstname, email, db) {
            let existingUsername = checkUsername(firstname);
            let existingEmail = checkEmail(email);
            if (existingUsername || existingEmail) {
                if (existingUsername) {
                    return "El nombre de usuario ya existe";
                }
                if (existingEmail) {
                    return "El correo electrónico ya está registrado";
                }
            } else {
                db.Users.create({
                    Fname: req.body.firstname,
                    Lname: req.body.lastname,
                    nickname: req.body.username,
                    email: req.body.email,
                    password_id: bcrypt.hashSync(req.body.pass, 10),
                    // "image": req.file.filename
                });
                return res.redirect("/user/login");
            }
        }

        register(req.body.firstname, req.body.email, db);
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