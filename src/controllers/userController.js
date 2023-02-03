const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const express = require('express');
const router = express.Router();

// DB REQUIRE
const db = require('../../database/models');
const { sequelize } = require("../../database/models");


const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const userController = {

    login: (req, res) => {
        console.log('Entre al login');
        res.render('./users/login');
    },
    register: (req, res) => {
        console.log('Entre al register');
        res.render('./users/register');
    },

    loginProcess: async (req, res) => {
        let userFound = await db.User.findOne({ where: { nickname: req.body.user } }, (userFound => {
            return userFound.nickname == req.body.username
        }));
        console.log("found", userFound);
        if (userFound) {
            if (bcrypt.compareSync(req.body.pass, userFound.password)) {
                req.session.userLogged = userFound;
                return res.redirect('/')
            } else {
                return res.render('./users/login', { error: 'Tus credenciales no son válidas' })
            }
        } else {
            return res.render('./users/login', { error: 'Tus credenciales no son válidas' })
        }
    },


    store: async (req, res) => {
        let checkUsername = await db.User.findOne({ where: { nickname: req.body.username } })
        let checkEmail = await db.User.findOne({ where: { email: req.body.email } })
        if (checkUsername) {
            console.log("Este nombre de usuario ya es existente!");
            return res.redirect("/user/register");
        } else if (checkEmail) {
            console.log("Este correo electrónico ya está registrado");
            return res.redirect("/user/register");
        } else {
            db.User.create({
                first_name: req.body.firstname,
                last_name: req.body.lastname,
                nickname: req.body.username,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.pass, 10),
                image: req.file.filename
            })
            return res.redirect("/user/login");
        }
    },



    delete: (id) => {
        let updatedList = User.filter((user => user.id !== id));
        fs.writeFileSync(usersFilePath, JSON.stringify(updatedList, null, '\t'));
        res.send(updatedList);
    },

    logout: (req, res) => {
        delete req.session.userLogged
        return res.redirect('/');
    }
}

module.exports = userController;