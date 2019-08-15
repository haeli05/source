exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("task_assigned_to", table => {
      table
        .string("task_assigned_to_id")
        .primary()
        .unique();
      table
        .string("task_id")
        .references("task_id")
        .inTable("tasks")
        .onDelete("cascade");
      table
        .string("user_id")
        .references("user_id")
        .inTable("users")
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
  return Promise.all([knex.schema.dropTableIfExists("task_assigned_to")]);
};

// Table task_assigned_to {
//     task_assigned_to_id varchar [pk, unique]
//     task_id varchar [ref: > tasks.task_id]
//     user_id varchar  [ref: > users.user_id]
//   }
