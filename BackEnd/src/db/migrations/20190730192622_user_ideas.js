exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("user_ideas", table => {
      table
        .string("user_ideas_id")
        .primary()
        .unique();
      table
        .string("user_id")
        .references("user_id")
        .inTable("users")
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
  return Promise.all([knex.schema.dropTableIfExists("user_ideas")]);
};

// Table user_ideas {
//     user_ideas_id varchar [pk, unique]
//     user_id varchar [ref: > users.user_id]
//     idea_id varchar [ref: > ideas.idea_id]
//   }
