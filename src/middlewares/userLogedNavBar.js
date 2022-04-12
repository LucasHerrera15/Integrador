function usuarioLogeadoNavbar(req, res, next){
    res.locals.isLogged = false;
    if(req.session && req.session.usuarioLogeado){
        res.locals.isLogged = true;
    }
    next();

}
module.exports = usuarioLogeadoNavbar;