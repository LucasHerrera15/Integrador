const usuariosControllers = require('./../controllers/usuariosControllers');

const middlewares = require('./../middlewares/loginVerificator');
const checkUsuarioLogeado = require('../middlewares/checkUsuarioLogeado');
const authLogin = require('../middlewares/authLogin');
const validateRegister = require('../middlewares/registroVerificacion')
const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const path = require('path');
const uploadFile = require('../middlewares/imageVerificacionUsers')







router.get('/login', checkUsuarioLogeado, usuariosControllers.login);

router.post('/login', usuariosControllers.procesoLogin);


router.get('/register', checkUsuarioLogeado, usuariosControllers.register);

router.post('/register',validateRegister, uploadFile.single('imagenusers') , usuariosControllers.crear_usuario);

router.get ('/perfil', authLogin,  usuariosControllers.perfil);

router.get('/logout', usuariosControllers.logout);

module.exports = router