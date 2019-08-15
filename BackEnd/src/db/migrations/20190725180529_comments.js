exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("comments", table => {
      table
        .string("comment_id")
        .primary()
        .unique();
      table
        .string("user")
        .references("user_id")
        .inTable("users")
        .onDelete("cascade");
      table
        .timestamp("created")
        .notNullable()
        .defaultTo(knex.fn.now());
      table.text("body");
      table.boolean("edited").defaultTo(false);
      table
        .timestamp("last_edit_date")
        .notNullable()
        .defaultTo(knex.fn.now());
      table.integer("upvotes");
      table.boolean("deleted").defaultTo(false);
      table
        .string("parent_comment")
        .references("comment_id")
        .inTable("comments")
        .onDelete("cascade");
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([knex.schema.dropTableIfExists("comments")]);
};

// Table comments {
//   comment_id varchar [pk, unique]
//   user varchar [ref: < users.user_id]
//   created datetime
//   body varchar [note: "Rich text with html tags"]
//   edited boolean
//   last_edit_date datetime
//   upvotes int
//   deleted boolean
//   parent_comment varchar [ref: > comments.comment_id] //[note: "default to null in case of top level comment"]

// }
