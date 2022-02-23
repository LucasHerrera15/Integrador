const usuariosControllers = require('./../controllers/usuariosControllers');
const middlewares = require ('./../middlewares/middlewares');

const express = require('express');
const { body } = require('express-validator');
const router = express.Router();


router.get('/login', usuariosControllers.login);
router.post('/login', middlewares, usuariosControllers.procesoLogin);

// router.post('/login', usuariosControllers.index);

router.get('/register', usuariosControllers.register);

router.post('/register',/* [ */
/*     body('nombre', 'Ingrese nombre y apellido')
        .exists()
        .isLength({min:5}),
    body('email', 'Ingrese un email valido')
        .exists()
        .isEmail(),
    body('edad', 'Ingrese un valor numérico')
        .exists()
        .isNumeric(),
    body('contraseña', 'Ingrese una contraseña valida')
        .exists()
        .isLength({min:8}),
],  */usuariosControllers.crear_usuario);



module.exports = router