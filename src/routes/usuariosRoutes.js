const usuariosControllers = require('./../controllers/usuariosControllers');

const middlewares = require('./../middlewares/middlewares');
const checkUsuarioLogeado = require('../middlewares/checkUsuarioLogeado');
const autenticadorLogeo = require('../middlewares/autenticadorLogeo');

const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

/* const validadorLogin= [validateLogin] */

router.get('/login', usuariosControllers.login);

router.post('/login', /* validadorLogin, checkUsuarioLogeado,  */usuariosControllers.procesoLogin);


router.get('/register',/* checkUsuarioLogeado */ usuariosControllers.register);

router.post('/register',usuariosControllers.crear_usuario);

router.get ('/perfil', /* autenticadorLogeo, */ usuariosControllers.perfil);

router.get('/logout', usuariosControllers.logout);

module.exports = router