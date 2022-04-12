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

        db.Usuario.create({
                nombreCompleto: req.body.nombre,
                nombreUsuario: req.body.usuario,
                fotoPerfil: req.body.imagenperfil,
                fecha: req.body.fecha,
                telefono: req.body.telefono,
                condicionFiscalFK: req.body.condicionFiscal
		    }
		).then((resultados)=>{
			res.redirect('/users/login');
		}) 
    }
}

module.exports = usuariosControllers