
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const handlebars = require('./config/handlebars.js')(app);
const router = require('./router/routes.js');
const adminRouter = require('./router/admin.js');
const adminMiddleware = require('./config/adminMiddleware.js');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 3000;
const path = require('path');
require('dotenv').config();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, './static')));
app.use(adminMiddleware);
app.use(router);
app.use(adminRouter);

app.use((req, res) => {
    res.status(404).render('404');
});

mongoose.connect(process.env.MONGO_DB_PASSWORD)
    .then(() => {
        app.listen(PORT);
    })
    .catch(() => {
        console.log('error');
    });
