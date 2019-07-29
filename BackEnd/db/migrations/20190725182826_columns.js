exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("columns", table => {
      table
        .string("column_id")
        .primary()
        .unique();
      table.string("title");
      table.specificType("tags", "text ARRAY[10]");
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
  return Promise.all([knex.schema.dropTableIfExists("columns")]);
};

// Table columns {
//     column_id varchar [pk,unique]
//     board_id varchar [ref: > boards.board_id] //pending
//     title string
//     tasks array [ref: > tasks.task_id]//pending
//     tags array[varchar] [note: "Max 10"]
//   }
