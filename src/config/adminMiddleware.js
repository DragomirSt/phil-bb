
const adminMiddleware = (req,res, next) => {
    const cookie = req.cookies['admin'];
    if(!cookie) {
        return next();
    } else {
        req.admin = cookie;
        res.locals.admin = cookie;
        next();
    } 
};

module.exports = adminMiddleware;