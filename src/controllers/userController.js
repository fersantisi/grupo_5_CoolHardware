const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


// const usersFilePath = path.join(__dirname, '../data/users.json');
// const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

//Databases
let db = require('../../database/models')


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

    // generateId: () => {
    //     let lastUser = users[users.length - 1]
    //     if (lastUser) {
    //         return lastUser.id + 1;
    //     } else {
    //         return 1;
    //     }
    // },

    store: (req, res) => {
        // const result = validationResult(req)
        // if (result.errors.length > 0) {
        //     return res.render('./users/register', { errors: result.mapped(), oldData: req.body })
        // }
        let newUser = db.Users.create({
            Fname: req.body.firstname,
            Lname: req.body.lastname,
            nickname: req.body.username,
            email: req.body.email,
            password_id: bcrypt.hashSync(req.body.pass, 10),
            // "image": req.file.filename
        }).catch(error => console.error(error))

        let checkUsername = users.find((user) => {
            return user.Fname == newUser.Fname;
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
            return res.redirect('/user/login')
        }
    },

    delete: (id) => {
        let updatedList = users.filter((user => user.id !== id));
        fs.writeFileSync(usersFilePath, JSON.stringify(updatedList, null, '\t'));
        res.send(updatedList);
    },

    logout: (req, res) => {
        delete req.session.userLogged
        return res.redirect('/');
    },

    listado: function (req, res) {
        db.Users.findAll()
            .then(function(user){
                res.render("userAdmin",{user:user})
            })

        
    }
}

module.exports = userController;