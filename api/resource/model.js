const db = require('../../data/dbConfig');

const getResources = () => {
    return db('resources')
}

const insertResource = async (resource) => {
    const [resource_id] = await db('resources').insert(resource)
    return getResources().where({ resource_id }).first()
}

module.exports = {
    getResources,
    insertResource
}
