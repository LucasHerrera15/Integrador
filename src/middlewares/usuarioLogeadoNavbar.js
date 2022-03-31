function usuarioLogeadoNavbar(req, res, next){
    res.locals.estaLogeado = false;
    if(req.session && req.session.usuarioLogeado){
        res.locals.estaLogeado = true;
        req.locals.usuarioLogeado = req.session.usuarioLogeado;
    }

}
module.exports = usuarioLogeadoNavbar;