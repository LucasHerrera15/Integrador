const db = require('../database/models');

async function authCookieMiddleware(req, res, next){
    
    let users = await db.Usuario.findAll().then(result => { return result })

    if(req.cookies.usuarioEmail != undefined && req.session.usuarioLogeado == undefined){
        for(let i = 0; i < users.length; i++){
            if(req.cookies.usuarioEmail == users[i].email){
                req.session.usuarioLogeado = users[i].email
            }
        }
    }
    next();
}

module.exports = authCookieMiddleware;