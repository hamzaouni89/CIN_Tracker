const router = require('express').Router();
let Municipalite =require('../models/municipalite.model');
let Gouvernorat = require('../models/gouvernorat.model');

router.route('/').get((req, res) => {
    Municipalite.find()
        .then(municipalites => res.json(municipalites))
        .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/add').post((req, res) => {
    const newMunicipalite = new Municipalite({ 
        nom : req.body.nom,
    });
    newMunicipalite.save()
    .then((result) => {
        Gouvernorat.findOne({name : req.body.gouvernorat}, (err, user) => {
        if(gouvernorat){
            gouvernorat.municipalites.push(newMunicipalite)
            gouvernorat.save();
            res.json({ message: 'Municipalite added!' })     
        }        
    })
    .catch(function (err) {
            res.status(500).send({
                'error': 'unable to verify gouvernorat'
            })
        })
    })       
});

module.exports = router;