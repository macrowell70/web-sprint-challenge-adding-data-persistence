const express = require('express');

const Tasks = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
   Tasks.getTasks()
    .then(tasks => res.json(tasks))
    .catch(err => res.json(err.message))
});

router.post('/', (req, res) => {
    res.json({ message: "POST tasks router "})
});

module.exports = router