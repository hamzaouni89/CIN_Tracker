const router = require('express').Router();
let Gouvernorat = require('../models/gouvernorat.model');

router.route('/').get((req, res) => {
    Gouvernorat.find()
        .then(gouvernorats => res.json(gouvernorats))
        .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;

    const newGouvernorat = new Gouvernorat({ name });

    newGouvernorat.save()
        .then(() => res.json('Gouvernorat added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;