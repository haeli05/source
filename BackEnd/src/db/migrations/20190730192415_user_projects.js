exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("user_projects", table => {
      table
        .string("user_projects_id")
        .primary()
        .unique();
      table
        .string("user_id")
        .references("user_id")
        .inTable("users")
        .onDelete("cascade");
      table
        .string("project_id")
        .references("project_id")
        .inTable("projects")
        .onDelete("cascade");
      table
        .timestamp("created_at")
        .notNullable()
        .defaultTo(knex.fn.now());
      table
        .timestamp("last_edit_date")
        .notNullable()
        .defaultTo(knex.fn.now());
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([knex.schema.dropTableIfExists("user_projects")]);
};

// Table user_projects {
//     user_projects_id varchar [pk, unique]
//     user_id varchar [ref: > users.user_id]
//     project_id varchar [ref: > projects.project_id]
//   }
