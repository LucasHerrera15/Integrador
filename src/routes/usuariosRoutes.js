const usuariosControllers = require('./../controllers/usuariosControllers');

const express = require('express');
const router = express.Router();


router.get('/login', usuariosControllers.login);
router.post('/login', usuariosControllers.procesoLogin);

router.get('/register', usuariosControllers.register);



module.exports = router