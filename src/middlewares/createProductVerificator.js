const {check} = require ('express-validator');


let validateCreateProduct = [
    check ('modelo')
        .isEmpty().withMessage('Debes completar este campo con un modelo').bail()
    ,
    check ('marca')
        .isEmpty().withMessage('Debes completar este campo con una marca').bail()
    ,
    check ('talle')
        .isEmpty().withMessage('Debes completar este campo con un talle').bail()
        .isNumeric().withMessage('Debes completar el talle con numeros')
    ,
    check ('precio')
        .isEmpty().withMessage('Debes completar este campo con un precio').bail()
        .isNumeric().withMessage('Debes completar el precio con numeros')
    ,
    check ('descripcion')
        .isEmpty().withMessage('Debes completar este campo con una descripcion').bail()
];


module.exports = validateCreateProduct;