exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("column_tasks", table => {
      table
        .string("column_tasks_id")
        .primary()
        .unique();
      table
        .string("column_id")
        .references("column_id")
        .inTable("columns")
        .onDelete("cascade");
      table
        .string("task_id")
        .references("task_id")
        .inTable("tasks")
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
  return Promise.all([knex.schema.dropTableIfExists("column_tasks")]);
};
// Table column_tasks {
//     column_tasks_id varchar [pk, unique]
//     column_id varchar [ref: > columns.column_id]
//     task_id varchar [ref: > tasks.task_id]
//   }
