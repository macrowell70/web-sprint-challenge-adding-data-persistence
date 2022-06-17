const express = require('express');

const Tasks = require('./model');

const router = express.Router();

const validatePost = (req, res, next) => {
    const { task_description, project_id } = req.body
    if (!task_description || !project_id) {
       return res.status(400).json({ message: "must have task_description and project_id" })
    }
    next()
}

router.get('/', (req, res) => {
   Tasks.getTasks()
    .then(tasks => res.json(tasks))
    .catch(err => res.json(err.message))
});

router.post('/', validatePost, (req, res) => {
    Tasks.insertTask(req.body)
        .then(task => res.json(task))
        .catch(err => res.json(err.message))
});

module.exports = router