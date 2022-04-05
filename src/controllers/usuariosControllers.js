const { validationResult }= require('express-validator');
const bcrypt = require('bcryptjs')
const db = require('../database/models');

const usuariosControllers =
{
    login: (req, res) => {
        res.render('users/login');
    },
    
    procesoLogin: (req, res) => {

        let errors = validationResult(req);
        console.log(req.body)
      
        let userToLogin = db.usuario.findAll({
            where: {
                email: req.body.email
            }
        }).then 
        if (userToLogin) {
            let passwordCheck = bcrypt.compareSync(req.body.password, userToLogin.contrasenia);
            if(passwordCheck){
                delete userToLogin.contrasenia;
                req.session.usuarioLogeado = userToLogin;

                if(req.body.rememberUser){
                    res.cookie('usuarioEmail', req.body.email, {maxAge: (1000 * 60) * 2})
                }
                return res.redirect('/users/perfil')
            }
            return res.render('/users/login', {
                errors: {
                    email: {
                        msg: 'Los datos ingresados son incorrectos'
                    }
                }
            })
        }
       /*  let usuarios = users;

        if(errors.isEmpty()){
            for(let i = 0; i < users.length; i++){
                if(usuarios[i].email == req.body.email){
                    if (usuarios[i].password == req.body.password){
                        var usuarioParaLoguearse = usuarios[i];
                        break;
                    }
                }
            }
        }else{
            res.render('login', {errors: errors.mapped(), old: req.body})
        }
        req.session.usuarioLogueado = usuarioParaLoguearse;
        res.redirect ('/') */
    },
    perfil: (req, res) => {
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

    
        let nuevoID=(users[users.length-1].id)+1 
		
        db.usuarios.create({
			where: {
                id: nuevoID,
                nombre: req.body.nombre,
                fecha: req.body.fecha,
                genero: req.body.genero,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),		
		    }
		}).then((resultados)=>{
			res.redirect('/login');
		}) 
    }
}

module.exports = usuariosControllers