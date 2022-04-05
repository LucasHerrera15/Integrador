const {check} = require ('express-validator');


let validateRegister = [
    check ('email')
        .isEmpty().withMessage('Debes completar este campo con tu E-mail').bail()
        .isEmail().withMessage('Este campo debe contener un E-mail').bail()
        .isLength({min:0, max: 100}).withMessage('El E-mail es muy largo.')
    ,
    check ('password')
    .isEmpty().withMessage('Debes completar este campo con tu constrasena').bail()
    .isLength({min:0, max: 20}).withMessage('La contraseña es muy larga').bail()
    .isStrongPassword({ minLength: 8, minLowercase: 1, minNumbers: 1}).withMessage('La contraseña debe tener más de ocho caracteres y un número')
];


module.exports = validateRegister;