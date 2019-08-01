exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("idea_comments", table => {
      table
        .string("idea_comments_id")
        .primary()
        .unique();
      table
        .string("idea_id")
        .references("idea_id")
        .inTable("ideas")
        .onDelete("cascade");
      table
        .string("comment_id")
        .references("comment_id")
        .inTable("comments")
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
  return Promise.all([knex.schema.dropTableIfExists("idea_comments")]);
};
// Table idea_comments {
//     idea_comments_id varchar [pk, unique]
//     idea_id varchar [ref: > ideas.idea_id]
//     comments varchar [ref: > comments.comment_id]
//   }
