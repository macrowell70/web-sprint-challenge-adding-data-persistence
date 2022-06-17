const db = require('../../data/dbConfig')

const getProjects = async () => {
    const result = await db('projects')

    const projects = result.map(project => {
        if (project.project_completed == null) {
            return {
                project_id: project.project_id,
                project_name: project.project_name,
                project_description: project.project_description,
                project_completed: false
            }
        }
        else {
            return {
                project_id: project.project_id,
                project_name: project.project_name,
                project_description: project.project_description,
                project_completed: true
            }
        }
    })

    return projects
}

const createProject = async (project) => {
    const [project_id] = await db('projects').insert(project)
    return getProjects().where({ project_id }).first()
}

module.exports = {
    getProjects,
    createProject
}