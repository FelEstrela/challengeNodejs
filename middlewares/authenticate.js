module.exports = (req, res, next) => {
    if (req.session.user) {
        res.locals.user = req.session.user;
    };
    res.locals.session = req.session;
    next();
};