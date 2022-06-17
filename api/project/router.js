const express = require('express');

const Projects = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "GET project router "})
});

router.post('/', (req, res) => {
    res.json({ message: "POST project router "})
});


module.exports = router;