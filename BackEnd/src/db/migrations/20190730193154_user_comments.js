exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("user_comments", table => {
      table
        .string("user_comments_id")
        .primary()
        .unique();
      table
        .string("user_id")
        .references("user_id")
        .inTable("users")
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
  return Promise.all([knex.schema.dropTableIfExists("user_comments")]);
};

// Table user_comments {
//     user_comments_id varchar [pk, unique]
//     user_id varchar [ref: > users.user_id]
//     comment_id varchar  [ref: > comments.comment_id]
//   }
