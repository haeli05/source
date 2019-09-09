exports.up = function(knex) {
  return Promise.all([
    knex.schema.table("board_columns", function(t) {
      t.integer("order").defaultTo(0);
    }),
    knex.schema.table("column_tasks", function(t) {
      t.integer("order").defaultTo(0);
    })
  ]);
};
exports.down = function(knex) {
  return Promise.all([
    knex.schema.table("board_columns", function(t) {
      t.dropColumn("order");
    }),
    knex.schema.table("column_tasks", function(t) {
      t.dropColumn("order");
    })
  ]);
};
