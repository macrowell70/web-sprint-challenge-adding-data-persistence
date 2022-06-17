
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments("project_id");
        tbl.varchar("project_name", 128).notNullable();
        tbl.text("project_description");
        tbl.boolean("project_completed");
    })
    .createTable('resources', tbl => {
        tbl.increments("resource_id");
        tbl.varchar("resource_name", 128).unique().notNullable();
        tbl.text("resource_description");
    })
    .createTable('tasks', tbl => {
        tbl.increments("task_id");
        tbl.text("task_description").notNullable();
        tbl.text("task_notes");
        tbl.boolean("task_completed");
        tbl.integer("project_id")
            .unsigned()
            .notNullable()
            .references("project_id")
            .inTable("projects")
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects")
};
