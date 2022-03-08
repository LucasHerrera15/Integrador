const {check} = require ('express-validator');

let validateLogin = [
    check ('email')
        .isEmpty().withMessage('Debes completar este campo con tu E-mail').bail()
        .isEmail().withMessage('Este campo debe contener un E-mail')
    ,
    check ('password')
    .isEmpty().withMessage('Debes completar este campo con tu constrasena')
];

module.exports = validateLogin;