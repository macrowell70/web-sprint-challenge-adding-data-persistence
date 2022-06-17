
exports.seed = async function(knex) {
  await knex('resources').insert([
    { resource_name: 'keyboard' },
    { resource_name: 'computer', resource_description: 'Windows PC' },
  ]);
};
