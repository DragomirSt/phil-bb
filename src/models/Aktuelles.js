
const mongoose = require('mongoose')

const AktuellesSchema = new mongoose.Schema({
    name: String,
    date: String,
    title: String,
    place: String,
    description: String,
});

const Aktuelles = mongoose.model('AktuellesSchema', AktuellesSchema);

module.exports = Aktuelles;