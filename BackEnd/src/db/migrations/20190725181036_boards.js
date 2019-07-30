exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("boards", table => {
      table
        .string("board_id")
        .primary()
        .unique();
      table.string("title");
      table.text("description");
      table
        .string("creator")
        .references("user_id")
        .inTable("users")
        .onDelete("cascade");
      table
        .timestamp("created")
        .notNullable()
        .defaultTo(knex.fn.now());
      table.text("body");
      table
        .timestamp("last_edit_date")
        .notNullable()
        .defaultTo(knex.fn.now());
      table.specificType("tags", "text ARRAY[10]");
      table.boolean("private");
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([knex.schema.dropTableIfExists("boards")]);
};

// Table boards {
//   board_id varchar [pk,unique]
//   title varchar
//   description varchar
//   creator varchar [ref: > users.user_id]
//   created datetime
//   last_edit_date datetime
//   tags array[varchar] [note: "Max 10"]
//   private boolean
// }
