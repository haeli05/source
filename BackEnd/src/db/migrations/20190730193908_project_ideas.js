exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("project_ideas", table => {
      table
        .string("project_ideas_id")
        .primary()
        .unique();
      table
        .string("project_id")
        .references("project_id")
        .inTable("projects")
        .onDelete("cascade");
      table
        .string("idea_id")
        .references("idea_id")
        .inTable("ideas")
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
  return Promise.all([knex.schema.dropTableIfExists("project_ideas")]);
};

// Table project_ideas {
//     project_ideas_id varchar [pk, unique]
//     project_id varchar [ref: > projects.project_id]
//     idea_id varchar  [ref: > ideas.idea_id]
//   }
