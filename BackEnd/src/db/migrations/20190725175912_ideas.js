exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("ideas", table => {
      table
        .string("idea_id")
        .primary()
        .unique();
      table.string("idea_name");
      table.text("body");
      table.text("string_body");
      table.boolean("edited").defaultTo(false);
      table
        .timestamp("last_edit_date")
        .notNullable()
        .defaultTo(knex.fn.now());
      table
        .string("creator")
        .references("user_id")
        .inTable("users")
        .onDelete("cascade");
      table.specificType("tags", "text ARRAY[10]"); //we need to look at the maximum array size
      table.boolean("deleted").defaultTo(false);
      table.integer("upvotes");
      table.boolean("private");
      table
        .timestamp("created")
        .notNullable()
        .defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .notNullable()
        .defaultTo(knex.fn.now());
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([knex.schema.dropTableIfExists("ideas")]);
};

// Table ideas {
//   idea_id varchar [pk, unique]
//   idea_name varchar
//   body varchar [note: "Rich text with html tags"]
//   string_body varchar [note: "Body but without html tags"]
//   edited boolean
//   last_edit_date datetime
//   creator varchar [ref: > users.user_id]
//   tags array[varchar] [note: "Max 10"]
//   deleted boolean
//   upvotes int
//   private boolean
// }
