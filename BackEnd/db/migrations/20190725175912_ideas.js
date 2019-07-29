exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("ideas", table => {
      table
        .string("idea_id")
        .primary()
        .unique();
      table.text("body");
      table.text("string_body");
      table.boolean("edited").defaultTo(false);
      table
        .timestamp("last_edit_date")
        .notNullable()
        .defaultTo(knex.fn.now());
      table.specificType("tags", "text ARRAY[10]"); //we need to look at the maximum array size
      table.boolean("deleted").defaultTo(false);
      table.integer("upvotes");

      table
        .timestamp("created")
        .notNullable()
        .defaultTo(knex.fn.now());
      table.text("description");
      table.specificType("social_links", "text ARRAY");
      table.specificType("wallet_links", "text ARRAY");
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([knex.schema.dropTableIfExists("ideas")]);
};

// Table ideas {
//     idea_id varchar [pk, unique]
//     idea_name varchar
//     body varchar [note: "Rich text with html tags"]
//     string_body varchar [note: "Body but without html tags"]
//     edited boolean
//     last_edit_date datetime
//     creator varchar [ref: > users.user_id] //pending
//     tags array[varchar] [note: "Max 10"]
//     deleted boolean
//     upvotes int
//     comments array [ref: > comments.comment_id] //pending
//   }
