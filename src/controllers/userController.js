const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

// DB REQUIRE
const db = require('../database/models');
const { sequelize } = require("../database/models");

const userController = {

    login: (req, res) => {
        console.log('Entre al login');
        res.render('./users/login');
    },
    register: (req, res) => {
        console.log('Entre al register');
        res.render('./users/register', { errorUser: null, errorEmail: null });
    },
    userProfile: (req, res) => {
        console.log('Entre al user');
        db.User.findByPk(req.params.id)
            .then(function(user){
                res.render('./users/userProfile', {user});
            })
            .catch(error => console.log(error))
    },
    editProfile: (req, res) => {
        db.User.findByPk(req.params.id)
            .then(function (user) {
                res.render('./users/editUser', {user})
            })
            .catch(error => console.log(error))

    },
    updateProfile: async (req, res) => {
        const result = validationResult(req)
        if (result.errors.length > 0) {
            return res.render('./users/editUser', {error: null, errors: result.mapped(), oldData: req.body })
        }
        await db.User.update({
            password: bcrypt.hashSync(req.body.pass, 10),
        },
        {
            where: {
                id: req.params.id
            }
        })
        res.clearCookie('remindMe')
        delete req.session.userLogged
        res.redirect("/user/login");
    },
    loginProcess: async (req, res) => {
        const result = validationResult(req)
        if (result.errors.length > 0) {
            return res.render('./users/login', {error: null, errors: result.mapped(), oldData: req.body })
        }
        let userFound = await db.User.findOne({ where: { nickname: req.body.user } }, (userFound => {
            return userFound.dataValues.nickname == req.body.user
        }));
        
        if (userFound) {
            if (bcrypt.compareSync(req.body.pass, userFound.password)) {
                req.session.userLogged = userFound.dataValues;
                if (req.body.remindMe) {
                    res.cookie('remindMe', userFound.dataValues.id, {maxAge: 3600000})
                }
                return res.redirect('/')
            } else {
                return res.render('./users/login', { error: 'Tus credenciales no son válidas' })
            }
        } else {
            return res.render('./users/login', { error: 'Tus credenciales no son válidas' })
        }
    },


    store: async (req, res) => {
        const result = validationResult(req)
        if (result.errors.length > 0) {
            return res.render('./users/register', { errorUser: null, errorEmail: null, errors: result.mapped(), oldData: req.body })
        }
        let checkUsername = await db.User.findOne({ where: { nickname: req.body.username } })
        let checkEmail = await db.User.findOne({ where: { email: req.body.email } })
        if (checkUsername || checkEmail) {
            if (checkUsername && !checkEmail) {
                let errorUser = "Este nombre de usuario ya existe!";
                return res.render("./users/register", { errorUser, errorEmail: null, oldData: req.body });
            } else if (!checkUsername && checkEmail) {
                let errorEmail = "Este correo electrónico ya está en uso!";
                return res.render("./users/register", { errorUser: null, errorEmail, oldData: req.body });
            } else {
                let errorUser = "Este nombre de usuario ya existe!";
                let errorEmail = "Este correo electrónico ya está en uso!";
                return res.render("./users/register", { errorUser, errorEmail, oldData: req.body });
            }
        } else {
            if (!req.file) {
                req.file = {
                    filename: 'Default.png'
                };
            }
            db.User.create({
                first_name: req.body.firstname,
                last_name: req.body.lastname,
                nickname: req.body.username,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.pass, 10),
                image: req.file.filename,
                // admin: 0
            })
            return res.redirect("/user/login");
        }
    },

    logout: (req, res) => {
        res.clearCookie('remindMe')
        delete req.session.userLogged
        return res.redirect('/');
    }
}

module.exports = userController;