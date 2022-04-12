function autenticadorLogeo(req, res, next){
    if(!req.session.usuarioLogeado){
        return res.redirect('/users/login')
    }
    next();
};
module.exports = autenticadorLogeo;