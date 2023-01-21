
const mongoose = require('mongoose')

const WasSchema = new mongoose.Schema({
    title: String,
    synopsis: String,
    description: String,   
});

const Was = mongoose.model('Wasschema', WasSchema);

module.exports = Was;