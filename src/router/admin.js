
const express = require('express');
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin');
const adminRouter = express.Router();

adminRouter.get('/admin', (req, res) => {
    res.render('admin');
});

adminRouter.post('/admin', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await Admin.findOne({ username });
        const match = bcrypt.compareSync(password, user.password);
    
        if (match) {
            res.cookie('admin', username, { httpOnly: true });
            res.redirect('/');
        } 
    } catch (error) {
        res.render('404');
    }
});

adminRouter.get('/logout', (req, res) => {
    res.clearCookie('admin');
    res.redirect('/');
});

module.exports = adminRouter;