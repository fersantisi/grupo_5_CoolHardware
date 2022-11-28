const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const userController = {

    login: (req, res) => {
        console.log('Entre al login');
        res.render('./users/login');
    },

    register: (req, res) => {
        console.log('Entre al register');
<<<<<<< HEAD
        res.render('./users/register');   

        
=======
        res.render('./users/register');
>>>>>>> a6b401159149c4251f80e3e9019afa61c11cd0dd
    },

    store: (req, res) => {
        let newUser = {
            "firstname": req.body.firstname,
            "lastname": req.body.lastname,
            "username": req.body.username,
            "email": req.body.email,
            "pass": req.body.pass,
            "passconfirm": req.body.passconfirm
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
            return res.json(newUser)
        }
    }

}

module.exports = userController;