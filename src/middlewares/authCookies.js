const db = require('../database/models');

function authCookies(req, res, next){
    if(req.cookies.emailCookie){
      let emailCookie = req.cookies.usuarioEmail;

    db.Usuario.findOne({
        where: {
            email: emailCookie
        }
    }).then((usuarioCookie) =>{
        if(usuarioCookie){
            req.session.usuarioLogeado = usuarioCookie;
        }
    })  
    }
    next();
};
module.exports = authCookies;
