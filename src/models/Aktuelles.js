
const mongoose = require('mongoose');

const AktuellesSchema = new mongoose.Schema({
    title: String,
    synopsis: String,
    description: String,
});

const Aktuelles = mongoose.model('AktuellesSchema', AktuellesSchema);
module.exports = Aktuelles;