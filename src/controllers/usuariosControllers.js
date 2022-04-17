const { validationResult }= require('express-validator');
const bcrypt = require('bcryptjs')
const db = require('../database/models');

const usuariosControllers =
{
    login: (req, res) => {
        res.render('users/login');
    },
    
    procesoLogin: (req, res) => {

        const { email, password } = req.body;

        db.Usuario.findOne({
            where: {
                email
            }
        }).then((userToLogin) =>{ 
             if (userToLogin){
            let passwordCheck = bcrypt.compareSync(password, userToLogin.contrasenia);
            if(passwordCheck){
                delete userToLogin.contrasenia;
                req.session.usuarioLogeado = userToLogin;

                if(req.body.rememberUser){
                    res.cookie('usuarioEmail', email, {maxAge: (1000 * 60) * 2})
                }
                return res.redirect('/users/perfil')
            }
            return res.render('users/login', {
                errors: {
                    password: {
                        msg: 'Contraseña incorrecta.'
                    }
                }
            })
        }else {
            return res.render('users/login', {
                errors: {
                    email: {
                        msg: 'El E-mail no está registrado.'
                    }
                }
            })
        }
     })
    },
    perfil: (req, res) => {
        console.log(req.session)
        res.render('users/perfil', {
            user : req.session.usuarioLogeado
        });
    },
    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/');
    },
    index:(req, res) => {
        res.render("index");
    },
    register: (req, res) => {
        res.render('users/register');
    },

    crear_usuario: (req, res) => {

        let fotoPerfil

        if (req.file) {
            fotoPerfil = req.file.filename;
        } else {
            fotoPerfil = 'imagenPerfilDefault.png';
        };
     
        db.Usuario.findOne({
            where: {
                email : req.body.email
            }
        }).then((userToRegister) =>{
            if(userToRegister == req.body.email){
                return res.render('users/register', {
                    errors: {
                        email: {
                            msg: 'El email ya esta en uso.'
                        }
                    }
                })
            }
        })
        db.Usuario.findOne({
            where: {
                nombreUsuario : req.body.usuario
            }
        }).then((userToRegister) =>{
            if(userToRegister == req.body.usuario){
                return res.render('users/register', {
                    errors: {
                        nombreUsuario: {
                            msg: 'El usuario ya esta en uso.'
                        }
                    }
                })
            }
        })
        db.Usuario.findOne({
            where: {
                telefono : req.body.telefono
            }
        }).then((userToRegister) =>{
            if(userToRegister == req.body.telefono){
                return res.render('users/register', {
                    errors: {
                        telefono: {
                            msg: 'El telefono ya esta en uso.'
                        }
                    }
                })
            }
        })
        
        let contrasenia = bcrypt.hashSync(req.body.password, 10);

        db.Usuario.create({
                nombreCompleto: req.body.nombre,
                fechaNacimiento: req.body.fecha,
                email: req.body.email,
                contrasenia: contrasenia,
                nombreUsuario: req.body.usuario,
                domicilio: req.body.domicilio,
                telefono: req.body.telefono,
                fotoPerfil: fotoPerfil,
                condicionFiscalFK: req.body.condicionFiscal,
		    }
		).then((resultados)=>{
			res.redirect('/users/login');
		}) 
    }
}

module.exports = usuariosControllers