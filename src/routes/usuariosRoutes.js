const usuariosControllers = require('./../controllers/usuariosControllers');

const express = require('express');
const router = express.Router();


router.get('/users/login', usuariosControllers.login);

router.get('/users/register', usuariosControllers.register);



module.exports = router