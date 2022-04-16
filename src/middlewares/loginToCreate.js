function loginToCreate(req, res, next){
    if(!req.session.usuarioLogeado){
        return res.redirect('/users/login')
    }
    next();
};
module.exports = loginToCreate;