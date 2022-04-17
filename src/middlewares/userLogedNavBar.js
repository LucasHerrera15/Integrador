const db = require('../database/models');
function usuarioLogeadoNavbar(req, res, next){
    res.locals.isLogged = false;
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
    if(req.session && req.session.usuarioLogeado){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.usuarioLogeado
    }

    next();

}
module.exports = usuarioLogeadoNavbar;