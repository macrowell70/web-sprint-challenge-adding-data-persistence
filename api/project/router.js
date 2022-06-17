const express = require('express');

const Projects = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
        .then(project => res.json(project))
        .catch(err => res.json(err.message))
});

router.post('/', (req, res) => {
    Projects.createProject(req.body)
        .then(project => res.json(project))
        .catch(err => {
            if (!req.body.project_name) {
                res.status(400).json(err.message)
            } else { res.json(err.message) }
        })
});


module.exports = router;