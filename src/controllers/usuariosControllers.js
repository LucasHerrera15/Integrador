const fs = require('fs');
const path = require('path');
const { validationResult }= require('express-validator');
const bcrypt = require('bcryptjs')

const usersFilePath = path.join(__dirname, '../database/dataUsuarios.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const usuariosControllers =
{
    login: (req, res) => {
        res.render('users/login');
    },
    
    procesoLogin: (req, res) => {
        console.log(req.body.email)
        let errors = validationResult(req);
        let usuarios = users;

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
        res.redirect ('/')
    },
    index:(req, res) => {
        res.render("index");
    },
    register: (req, res) => {
        res.render('users/register');
    },

    crear_usuario: (req, res) => {

    
        let nuevoID=(users[users.length-1].id)+1 
		
		let newUser = {
			id: nuevoID,
			nombre: req.body.nombre,
			fecha: req.body.fecha,
			genero: req.body.genero,
			email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),		
		}
		users.push(newUser)

		fs.writeFileSync(usersFilePath, JSON.stringify(users,null,' ')); 
        console.log(req.body)

		res.redirect('./login'); 
    }
}

module.exports = usuariosControllers