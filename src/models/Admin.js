
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

AdminSchema.pre('save', function (next) {

    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;

            next();
        })
});

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;