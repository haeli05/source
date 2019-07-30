exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("board_columns", table => {
      table
        .string("board_columns_id")
        .primary()
        .unique();
      table
        .string("board_id")
        .references("board_id")
        .inTable("boards")
        .onDelete("cascade");
      table
        .string("column_id")
        .references("column_id")
        .inTable("columns")
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
  return Promise.all([knex.schema.dropTableIfExists("board_columns")]);
};
// Table board_columns {
//     board_columns_id varchar [pk, unique]
//     board_id varchar [ref: > boards.board_id]
//     column_id varchar [ref: > columns.column_id]
//   }
