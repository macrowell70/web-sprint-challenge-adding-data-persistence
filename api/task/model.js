const db = require('../../data/dbConfig');

const getTasks = async () => {
    const result = await db('tasks')
        .leftJoin('projects', 'tasks.project_id', 'projects.project_id')
        .select('tasks.*', 'projects.project_name', 'projects.project_description')

    const tasks = result.map(task => {
        return {
            task_id: task.task_id,
            task_description: task.task_description,
            task_notes: task.task_notes,
            task_completed: task.task_completed ? true : false,
            project_name: task.project_name,
            project_description: task.project_description
        }
    })

    return tasks
}

module.exports = {
    getTasks,
}