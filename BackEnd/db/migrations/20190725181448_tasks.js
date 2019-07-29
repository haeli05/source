exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("tasks", table => {
      table
        .string("task_id")
        .primary()
        .unique();
      table.string("created");
      table.string("title");
      table.text("content");
      table.integer("compensation");
      table.string("currency").defaultTo("USD");
      table.timestamp("due_date");
      table.specificType("tags", "text ARRAY[10]");
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
//     task_id varchar [pk,unique]
//     board_id varchar [ref: > boards.board_id] //pending
//     column_id varchar [ref: > columns.column_id] //pending
//     creator varchar [ref: > users.user_id] //pending
//     created varchar
//     title varchar
//     content varchar [note: "Rich text with html tags"]
//     assigned_to array [ref: > users.user_id] //pending
//     compensation int
//     currency string [note: "Default USD"]
//     due_date datetime
//     tags array[varchar] [note: "Max 10"]
//     completed boolean
//   }
