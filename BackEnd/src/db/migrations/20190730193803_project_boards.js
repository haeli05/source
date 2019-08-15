exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("project_boards", table => {
      table
        .string("project_boards_id")
        .primary()
        .unique();
      table
        .string("project_id")
        .references("project_id")
        .inTable("projects")
        .onDelete("cascade");
      table
        .string("board_id")
        .references("board_id")
        .inTable("boards")
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
  return Promise.all([knex.schema.dropTableIfExists("project_boards")]);
};

// Table project_boards {
//     project_boards_id varchar [pk, unique]
//     project_id varchar [ref: > projects.project_id]
//     board_id varchar  [ref: > boards.board_id]
//   }
