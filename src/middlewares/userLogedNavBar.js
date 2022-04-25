const db = require('../database/models');
function usuarioLogeadoNavbar(req, res, next){
    res.locals.isLogged = false;
    if(req.session && req.session.usuarioLogeado){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.usuarioLogeado
    
    }
    next();

}
module.exports = usuarioLogeadoNavbar;