const db = require('../../data/dbConfig')

const getProjects = async (project_id) => {
    const result = !project_id ?
    await db('projects')
     : 
    await db('projects').where({ project_id }).first()

    const projects = !project_id ?
        result.map(project => {
            return {
                project_id: project.project_id,
                project_name: project.project_name,
                project_description: project.project_description,
                project_completed: project.project_completed == null ? false : true
            }
        }) : {
                project_id: result.project_id,
                project_name: result.project_name,
                project_description: result.project_description,
                project_completed: result.project_completed == null ? false : true
            }

    return projects
}

const createProject = async (project) => {
    const [project_id] = await db('projects').insert(project)
    return getProjects(project_id)
}

module.exports = {
    getProjects,
    createProject
}