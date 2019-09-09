exports.up = function(knex, Promise) {
  return knex.schema.table("boards", function(t) {
    t.boolean("deleted").defaultTo(false);
  });
};
exports.down = function(knex) {
  return knex.schema.table("boards", function(t) {
    t.dropColumn("deleted");
  });
};
