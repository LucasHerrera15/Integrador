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
                    res.cookie('usuarioEmail', email, {maxAge: 900000})
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
        res.render('users/perfil', {
            user : req.session.usuarioLogeado
        });
    },
    logout: (req, res) => {
        res.clearCookie('userEmail')
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
        let contrasenia = bcrypt.hash(req.body.password, 10);

        db.Usuario.create({
                nombreCompleto: req.body.nombre,
                fechaNacimiento: req.body.fecha,
                email: req.body.email,
                contrasenia: contrasenia,
                nombreUsuario: req.body.usuario,
                domicilio: req.body.domicilio,
                telefono: req.body.telefono,
                /* fotoPerfil: req.body.imagenperfil, */
                condicionFiscalFK: req.body.condicionFiscal,
		    }
		).then((resultados)=>{
			res.redirect('/users/login');
		}) 
    }
}

module.exports = usuariosControllers