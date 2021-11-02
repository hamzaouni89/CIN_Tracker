const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const municipaliteSchema = new Schema({
    nom: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
});

const Municipalite = mongoose.model('Municipalite', municipaliteSchema);

module.exports = Municipalite;