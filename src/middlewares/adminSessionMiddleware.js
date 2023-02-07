function adminSessionMiddleware(req, res, next) {
    
    if (req.session.userLogged.admin == 0) {
        res.redirect('/')
    }

    next();
}

module.exports = adminSessionMiddleware;