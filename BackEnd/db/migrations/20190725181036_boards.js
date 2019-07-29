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
        .timestamp("created")
        .notNullable()
        .defaultTo(knex.fn.now());
      table.text("body");
      table
        .timestamp("last_edit_date")
        .notNullable()
        .defaultTo(knex.fn.now());
      table.specificType("tags", "text ARRAY[10]");
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([knex.schema.dropTableIfExists("boards")]);
};

// Table boards {
//     board_id varchar [pk,unique]
//     title varchar
//     description varchar
//     creator varchar [ref: > users.user_id] //pending
//     created datetime
//     last_edit_date datetime
//     columns array [ref: > columns.column_id]//
//     tags array[varchar] [note: "Max 10"]
//   }
