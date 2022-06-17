const express = require('express');

const Tasks = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "GET tasks router "})
});

router.post('/', (req, res) => {
    res.json({ message: "POST tasks router "})
});

module.exports = router