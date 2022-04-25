const { validationResult }= require('express-validator');
const bcrypt = require('bcryptjs')
const db = require('../database/models');

const usuariosControllers =
{
    login: (req, res) => {
        res.render('users/login');
    },
    
    procesoLogin: async (req, res) => {
        let errors = validationResult(req);
        const { email, password } = req.body;

        let buscarUsuario = await db.Usuario.findOne({
            where: {
                email
            }
        }).then((userToLogin) =>{ 
             if (userToLogin){
            let passwordCheck = bcrypt.compareSync(password, userToLogin.contrasenia);
            if(passwordCheck){
                delete userToLogin.contrasenia;
                req.session.usuarioLogeado = userToLogin;
                console.log('Antes de cookies', req.body);
                if(req.body.rememberUser){
                    res.cookie('usuarioEmail', email, {maxAge: 900000})
                    console.log("Despues del cookies",req.body.rememberUser)
                }
                console.log(req.session.usuarioLogeado)
                console.log(req.cookies)
                return res.redirect('/')
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
       const contrasenia = bcrypt.hashSync(req.body.password, 10)

        db.Usuario.create({
                nombreCompleto: req.body.nombre,
                fechaNacimiento: req.body.fecha,
                email: req.body.email,
                contrasenia: contrasenia,
                domicilio: req.body.domicilio,
                nombreUsuario: req.body.usuario,
                telefono: req.body.telefono,
                fotoPerfil: req.file,
                condicionFiscalFK: req.body.condicionFiscal,
		    }
		).then((resultados)=>{
			res.redirect('/users/login');
		}) 
    }
}

module.exports = usuariosControllers