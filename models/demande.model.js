const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const demandeSchema = new Schema({
    gouvernorat: { type: String, required: true },
    municipalite: { type: String, required: true },
    decanat: { type: String, required: true },
    date: { type: Date, required: true },
    nom_prenom: { type: String, required: true },
    age: { type: Number, required: true },
    sex: {
        type: String,
        enum: ['Homme', 'Femme'],
        default: 'Homme'
    },
    type: {
        type: String,
        enum: ['Nouveau', 'Renouvellement', 'Perte'],
        default: 'Nouveau'
    },
    acte_naissance: {
        type: String,
        enum: ['Oui', 'Non'],
        default: 'Oui'
    },
    nationalite: {
        type: String,
        enum: ['Oui', 'Non'],
        default: 'Oui'
    },
    carte_residence: {
        type: String,
        enum: ['Oui', 'Non'],
        default: 'Oui'
    },
    quittance: {
        type: String,
        enum: ['Oui', 'Non'],
        default: 'Oui'
    },

},{
    timestamps : true,
});

const Demande = mongoose.model('Demande', demandeSchema);

module.exports = Demande;
