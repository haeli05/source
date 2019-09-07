exports.up = function(knex) {
  return Promise.all([
    knex.schema.table("columns", function(t) {
      t.boolean("deleted").defaultTo(false);
    }),
    knex.schema.table("tasks", function(t) {
      t.boolean("deleted").defaultTo(false);
    }),
    knex.schema.table("user_tasks", function(t) {
      t.boolean("deleted").defaultTo(false);
    }),
    knex.schema.table("column_tasks", function(t) {
      t.boolean("deleted").defaultTo(false);
    }),
    knex.schema.table("board_columns", function(t) {
      t.boolean("deleted").defaultTo(false);
    }),
    knex.schema.table("project_permissions", function(t) {
      t.boolean("deleted").defaultTo(false);
    }),
    knex.schema.table("user_projects", function(t) {
      t.boolean("deleted").defaultTo(false);
    }),
    knex.schema.table("user_ideas", function(t) {
      t.boolean("deleted").defaultTo(false);
    }),
    knex.schema.table("user_followers", function(t) {
      t.boolean("deleted").defaultTo(false);
    }),
    knex.schema.table("user_comments", function(t) {
      t.boolean("deleted").defaultTo(false);
    }),
    knex.schema.table("project_boards", function(t) {
      t.boolean("deleted").defaultTo(false);
    }),
    knex.schema.table("project_ideas", function(t) {
      t.boolean("deleted").defaultTo(false);
    }),
    knex.schema.table("task_assigned_to", function(t) {
      t.boolean("deleted").defaultTo(false);
    })
  ]);
};
exports.down = function(knex) {
  return Promise.all([
    knex.schema.table("columns", function(t) {
      t.dropColumn("deleted");
    }),
    knex.schema.table("tasks", function(t) {
      t.dropColumn("deleted");
    }),
    knex.schema.table("user_tasks", function(t) {
      t.dropColumn("deleted");
    }),
    knex.schema.table("column_tasks", function(t) {
      t.dropColumn("deleted");
    }),
    knex.schema.table("board_columns", function(t) {
      t.dropColumn("deleted");
    }),
    knex.schema.table("project_permissions", function(t) {
      t.dropColumn("deleted");
    }),
    knex.schema.table("user_projects", function(t) {
      t.dropColumn("deleted");
    }),
    knex.schema.table("user_ideas", function(t) {
      t.dropColumn("deleted");
    }),
    knex.schema.table("user_followers", function(t) {
      t.dropColumn("deleted");
    }),
    knex.schema.table("user_comments", function(t) {
      t.dropColumn("deleted");
    }),
    knex.schema.table("project_boards", function(t) {
      t.dropColumn("deleted");
    }),
    knex.schema.table("project_ideas", function(t) {
      t.dropColumn("deleted");
    }),
    knex.schema.table("task_assigned_to", function(t) {
      t.dropColumn("deleted");
    })
  ]);
};
