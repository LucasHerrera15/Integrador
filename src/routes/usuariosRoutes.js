const usuariosControllers = require('./../controllers/usuariosControllers');

const express = require('express');
const router = express.Router();


router.get('/login', usuariosControllers.login);
router.post('/login', usuariosControllers.procesoLogin);
router.post('/login', usuariosControllers.index);

router.get('/register', usuariosControllers.register);

router.post('/register', usuariosControllers.crear_usuario);



module.exports = router