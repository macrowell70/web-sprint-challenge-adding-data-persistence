const express = require('express');

const Resources = require('./model');

const router = express.Router();

const checkResourceNameUnique = async (req, res, next) => {
    const resources = await Resources.getResources()
        .where("resource_name", req.body.resource_name)
    if (resources.length != 0) {
        res.status(400).json({ message: "that resource already exists" })
    } else { next() }
}

router.get('/', (req, res) => {
    Resources.getResources()
        .then(resources => res.json(resources))
        .catch(err => res.json(err.message))
})

router.post('/', checkResourceNameUnique, (req, res) => {
    Resources.insertResource(req.body)
        .then(resource => res.json(resource))
        .catch(err => res.json(err))
})

module.exports = router