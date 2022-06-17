const express = require('express');

const Projects = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
        .then(project => res.json(project))
        .catch(err => res.json(err.message))
});

router.post('/', (req, res) => {
    res.json({ message: "POST project router "})
});


module.exports = router;