function userLoggedMiddleware(req, res, next) {
    
    if (req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged
        console.log(res.locals.userLogged)
    }

    next();
}

module.exports = userLoggedMiddleware;