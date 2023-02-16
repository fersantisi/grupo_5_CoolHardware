const { body } = require('express-validator');

const validations = [
    body('user').notEmpty().withMessage('Tenés que ingresar tu nombre de usuario'),
    body('pass').notEmpty().withMessage('Tenés que ingresar tu contraseña')
]

module.exports = validations;