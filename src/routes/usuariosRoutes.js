const usuariosControllers = require('./../controllers/usuariosControllers');

const middlewares = require('./../middlewares/loginVerificator');
const checkUsuarioLogeado = require('../middlewares/checkUsuarioLogeado');
const authLogin = require('../middlewares/authLogin');
const validateRegister = require('../middlewares/registroVerificacion')
const multer = require('multer');
const path = require('path');
const express = require('express');
const { body } = require('express-validator');
const router = express.Router();



const multerDiskStorage = multer.diskStorage({
    destination: function(req, file, cb) {
     cb(null, path.join(__dirname,'../public/images/users'));    
    },
    filename: function(req, file, cb) {      
     let imageName = Date.now() + path.extname(file.originalname);   
     cb(null, imageName);         
    }
});

const uploadFile = multer({ storage: multerDiskStorage });

router.get('/login', checkUsuarioLogeado, usuariosControllers.login);

router.post('/login', usuariosControllers.procesoLogin);


router.get('/register', checkUsuarioLogeado, usuariosControllers.register);

router.post('/register',validateRegister, uploadFile.single('imageName') , usuariosControllers.crear_usuario);

router.get ('/perfil', authLogin,  usuariosControllers.perfil);

router.get('/logout', usuariosControllers.logout);

module.exports = router