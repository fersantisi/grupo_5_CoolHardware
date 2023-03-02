const db = require('../database/models');

async function remindMeMiddleware(req, res, next) {

    if (req.cookies.remindMe != undefined && res.locals.isLogged != true) {
        res.locals.userLogged = await db.User.findByPk(req.cookies.remindMe)
    }

    next();
}

module.exports = remindMeMiddleware;