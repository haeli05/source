exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("user_followers", table => {
      table
        .string("user_followers_id")
        .primary()
        .unique();
      table
        .string("user_id")
        .references("user_id")
        .inTable("users")
        .onDelete("cascade");
      table
        .string("user_follower")
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
  return Promise.all([knex.schema.dropTableIfExists("user_followers")]);
};

// Table user_followers {
//     user_followers_id varchar [pk, unique]
//     user_id varchar [ref: > users.user_id]
//     user_follower varchar  [ref: > users.user_id]
//   }
