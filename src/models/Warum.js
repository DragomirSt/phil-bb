
const mongoose = require('mongoose')

const WarumSchema = new mongoose.Schema({
    title: String,
    description: String,   
});

const Warum = mongoose.model('Warumschema', WarumSchema);

module.exports = Warum;