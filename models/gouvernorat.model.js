const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gouvernoratSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    municipalites: [{ type: Schema.Types.ObjectId, ref: 'Municipalite' }],
}, {
    timestamps: true,
});

const Gouvernorat = mongoose.model('Gouvernorat', gouvernoratSchema);

module.exports = Gouvernorat;