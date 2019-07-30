exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("project_permissions", table => {
      table
        .string("project_permissions_id")
        .primary()
        .unique();
      table
        .string("project_id")
        .references("project_id")
        .inTable("projects")
        .onDelete("cascade");
      table
        .string("user_id")
        .references("user_id")
        .inTable("users")
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
  return Promise.all([knex.schema.dropTableIfExists("project_permissions")]);
};
// Table project_permissions {
//     project_permissions_id varchar [pk, unique]
//     project_id varchar [ref: > projects.project_id]
//     user_id varchar [ref: > users.user_id]
//   }
