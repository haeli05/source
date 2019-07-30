exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("tasks", table => {
      table
        .string("task_id")
        .primary()
        .unique();
      table
        .string("board_id")
        .references("board_id")
        .inTable("boards")
        .onDelete("cascade");
      table
        .string("creator")
        .references("user_id")
        .inTable("users")
        .onDelete("cascade");
      table
        .string("column_id")
        .references("column_id")
        .inTable("columns")
        .onDelete("cascade");
      table.string("created");
      table.string("title");
      table.text("content");
      table.integer("compensation");
      table.string("currency").defaultTo("USD");
      table.timestamp("due_date");
      table.specificType("tags", "text ARRAY[10]"); // limit of 10 is not enforced by postgres, thus need be enforced in app logic
      table.boolean("private");
      table.boolean("completed");
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
  return Promise.all([knex.schema.dropTableIfExists("tasks")]);
};

// Table tasks {
//   task_id varchar [pk,unique]
//   board_id varchar [ref: > boards.board_id]
//   column_id varchar [ref: > columns.column_id]
//   creator varchar [ref: > users.user_id]
//   created varchar
//   title varchar
//   content varchar [note: "Rich text with html tags"]
//   compensation int
//   currency string [note: "Default USD"]
//   due_date datetime
//   tags array[varchar] [note: "Max 10"]
//   private boolean
//   completed boolean
// }
