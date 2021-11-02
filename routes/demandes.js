const router = require('express').Router();
let Demande =require('../models/demande.model');

router.route('/').get((req, res) => {
    Demande.find()
        .then(demande => res.json(demande))
        .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/add').post((req,res) => {

    const gouvernorat = req.body.gouvernorat;
    const municipalite = req.body.municipalite;
    const decanat = req.body.decanat;
    const date = Date.parse(req.body.date);
    const nom_prenom = req.body.nom_prenom;
    const age = Number(req.body.age);
    const sex = req.body.sex;
    const type = req.body.type;
    const acte_naissance = req.body.acte_naissance;
    const nationalite = req.body.nationalite;
    const carte_residence = req.body.carte_residence;
    const quittance = req.body.quittance;

    const newDemande = new Demande({
        gouvernorat,
        municipalite,
        decanat,
        date,
        nom_prenom,
        age,
        sex,
        type,
        acte_naissance,
        nationalite,
        carte_residence,
        quittance
    });
    console.log(newDemande);
    newDemande.save()
        .then(() => res.json('Demande added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
    Demande.findByIdAndDelete(req.params.id)
        .then(() => res.json('Demande deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Demande.findById(req.params.id)
        .then(demande => res.json(demande))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Demande.findById(req.params.id)
        .then(demande => {
            demande.gouvernorat = req.body.gouvernorat;
            demande.municipalite = req.body.municipalite;
            demande.decanat = req.body.decanat;
            demande.age = Number(req.body.age);
            demande.date = Date.parse(req.body.date);
            demande.nom_prenom = req.body.nom_prenom;
            demande.sex = req.body.sex;
            demande.type = req.body.type,
            demande.acte_naissance = req.body.acte_naissance,
            demande.nationalite = req.body.nationalite,
            demande.carte_residence = req.body.carte_residence,
            demande.quittance = req.body.quittance

            demande.save()
                .then(() => res.json('Demande updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
})


module.exports = router;