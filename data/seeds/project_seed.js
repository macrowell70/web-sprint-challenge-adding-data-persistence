
exports.seed = async function(knex) {
  await knex('projects').insert([
    { project_name: 'Web API', project_description: 'Build APIs' },
    { project_name: 'Databases', project_description: 'Learn SQL', project_completed: 1 }
  ]);
};
