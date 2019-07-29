exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("users", table => {
      table
        .string("user_id")
        .primary()
        .unique();
      table.string("full_name");
      table.string("username").unique();
      table.text("bio");
      table.string("email").unique();
      table.string("password");
      table
        .timestamp("created_at")
        .notNullable()
        .defaultTo(knex.fn.now());
      table.string("location");
      table.string("website");
      table.specificType("skills", "text ARRAY");
      table.specificType("social_links", "text ARRAY");
      table.specificType("wallet_links", "text ARRAY");
      table.string("avatar");
      table.specificType("tags_following", "text ARRAY");
      table.boolean("deleted").defaultTo(false);
      table
        .timestamp("updated_at")
        .notNullable()
        .defaultTo(knex.fn.now());
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([knex.schema.dropTableIfExists("users")]);
};

// Table users {
//     user_id varchar [pk, unique]
//     full_name varchar
//     username varchar [unique]
//     bio varchar [note: "Rich text with html tags"] //used text
//     email varchar [unique]
//     password varchar [note: "We're using bcrypt to encrypt passwords"]
//     created_at datetime
//     location varchar
//     website varchar
//     projects array [ref: > projects.project_id] //pending
//     ideas array [ref: > ideas.idea_id] //pending
//     assigned_tasks array [ref: > tasks.task_id] //pending
//     skills array[varchar] [note: "Max 100"] //set limits on the array
//     social_links array[varchar]
//     wallet_links array[varchar]
//     user_followers array [ref: > users.user_id] //pending
//     user_following array [ref: > users.user_id] //pending
//     avatar varchar [note: "Link to S3 image"]
//     tags_following array[varchar]
//     comments array [ref: > comments.comment_id] //pending
//     deleted boolean
//   }
