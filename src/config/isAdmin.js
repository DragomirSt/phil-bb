
const isAdmin = (req, res, next) => {
    if (req.admin) {
        next();
    } else {
        res.redirect('/');
    }
}

module.exports = isAdmin;