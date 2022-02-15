const fs = require('fs');
const path = require('path');

const usuariosFilePath = path.join(__dirname, '../database/dataUsuarios.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

console.log(usuarios)

const usuariosControllers =
{
    login: (req, res) => {
        res.render('users/login');
    },
    procesosLogin: (req, res) => {
        // if (){}
        console.log("Hola")
    },

    
    register: (req, res) => {
        res.render('users/register');
    }
}

module.exports = usuariosControllers