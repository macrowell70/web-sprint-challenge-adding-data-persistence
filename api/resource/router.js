const express = require('express');

const Resources = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "GET resource router "})
})

router.post('/', (req, res) => {
    res.json({ message: "POST resource router "})
})

module.exports = router