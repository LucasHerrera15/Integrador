const usuariosControllers = require('./../controllers/usuariosControllers');

const middlewares = require('./../middlewares/middlewares');
const checkUsuarioLogeado = require('../middlewares/checkUsuarioLogeado');
const autenticadorLogeo = require('../middlewares/autenticadorLogeo');
const validateRegister = require('../middlewares/registroVerificacion')
const multer = require('multer');
const path = require('path');
const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

/* const validadorLogin= [validateLogin] */

const multerDiskStorage = multer.diskStorage({
    destination: function(req, file, cb) {       // request, archivo y callback que almacena archivo en destino
     cb(null, path.join(__dirname,'../public/images/users'));    // Ruta donde almacenamos el archivo
    },
    filename: function(req, file, cb) {          // request, archivo y callback que almacena archivo en destino
     let imageName = Date.now() + path.extname(file.originalname);   // milisegundos y extensión de archivo original
     cb(null, imageName);         
    }
});

const uploadFile = multer({ storage: multerDiskStorage });

router.get('/login', usuariosControllers.login);

router.post('/login', /* validadorLogin, checkUsuarioLogeado,  */usuariosControllers.procesoLogin);


router.get('/register',/* checkUsuarioLogeado */ usuariosControllers.register);

router.post('/register',validateRegister, uploadFile.single('imageName') , usuariosControllers.crear_usuario);

router.get ('/perfil', usuariosControllers.perfil);

router.get('/logout', usuariosControllers.logout);

module.exports = router