const db = require('../../data/dbConfig');

const getTasks = async (task_id) => {
    const result = !task_id ? 
    await db('tasks')
        .leftJoin('projects', 'tasks.project_id', 'projects.project_id')
        .select('tasks.*', 'projects.project_name', 'projects.project_description')
            :
        await db('tasks').where({ task_id }).first();

    const tasks = !task_id ? 
        result.map(task => {
            return {
                task_id: task.task_id,
                task_description: task.task_description,
                task_notes: task.task_notes,
                task_completed: task.task_completed ? true : false,
                project_name: task.project_name,
                project_description: task.project_description
            }
            }) : {
                task_id: result.task_id,
                task_description: result.task_description,
                task_notes: result.task_notes,
                task_completed: result.task_completed ? true : false,
                project_id: result.project_id
            }


    return tasks
}

const insertTask = async (task) => {
    const [task_id] = await db('tasks').insert(task)
    return getTasks(task_id)
}

module.exports = {
    getTasks,
    insertTask
}