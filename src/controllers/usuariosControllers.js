const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../database/dataUsuario.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const usuariosControllers =
{
    login: (req, res) => {
        res.render('users/login');
    },
    index:(req, res) => {
        res.render("index");
    },
    register: (req, res) => {
        res.render('users/register');
    },

    crear_usuario: (req, res) => {
    
/*         let nuevoID=(users[users.length-1].id)+1 
		
		let newUser = {
			id: nuevoID,
			nombre: req.body.nombre,
			fecha: req.body.fecha,
			genero: req.body.genero,
			email: req.body.email,
            password: req.body.password,		
		}
		users.push(newUser)

		fs.writeFileSync(usersFilePath, JSON.stringify(users,null,' ')); */
        console.log(req.body)

		/* res.redirect('/'); */
    }
}

module.exports = usuariosControllers