// Esta funcion nos permite verificar si el usuario es administrador o no
function adminSessionMiddleware(req, res, next) {
    
    if (req.session.userLogged.admin == 0) {
        res.redirect('/')
    }

    next();
}

module.exports = adminSessionMiddleware;