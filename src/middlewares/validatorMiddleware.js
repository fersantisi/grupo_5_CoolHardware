const { body } = require('express-validator');
const path = require('path');

const validations = [
    body('firstname').notEmpty().withMessage('Tenés que escribir tu nombre'),
    body('lastname').notEmpty().withMessage('Tenés que ingresar tu apellido'),
    body('username').notEmpty().withMessage('Tenés que ingresar tu nombre de usuario'),
    body('email')
        .notEmpty().withMessage('Tenés que ingresar tu email').bail()
        .isEmail().withMessage('No es un email válido'),
    body('pass').notEmpty().withMessage('Tenés que ingresar tu contraseña'),
    body('passconfirm')
        .notEmpty().withMessage('Tenés que confirmar tu contraseña').bail()
        .custom((value, { req }) => value === req.body.pass).withMessage('Tus contraseñas no coinciden'),
    body('avatar').custom((value, {req}) => {
        let file = req.file
        let acceptedExtensions = ['.jpg', '.png', '.gif'];
        if(!file){
            throw new Error('Tenés que subir una imagen')
        }else{
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extensiones permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }
        return true;
    })
]

module.exports = validations;