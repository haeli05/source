exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("projects", table => {
      table
        .string("project_id")
        .primary()
        .unique();
      table.string("contributors");
      table.json("permissions");
      table.string("project_name");
      table
        .timestamp("created")
        .notNullable()
        .defaultTo(knex.fn.now());
      table.text("description");
      table.specificType("tags", "text ARRAY[10]"); //we need to look at the maximum array size
      table.specificType("social_links", "text ARRAY");
      table.specificType("wallet_links", "text ARRAY");
      table.boolean("deleted").defaultTo(false);
      table
        .timestamp("updated_at")
        .notNullable()
        .defaultTo(knex.fn.now());
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([knex.schema.dropTableIfExists("projects")]);
};

// Table projects {
//     project_id varchar [pk, unique]
//     creator varchar [ref: > users.user_id] //pending
//     contributors varchar
//     permissions json [note: "JSON object of permission types and their users. i.e. {admin:[...], supporters:[...]}"]
//     boards array [ref: > boards.board_id] //pending
//     ideas array [ref: > ideas.idea_id] //pending
//     project_name varchar
//     created datetime
//     description varchar [note: "Rich text with html tags"]
//     tags array[varchar] [note: "Max 10"]
//     social_links array[varchar]
//     wallet_links array[varchar] [note: "Links to crypto wallets or paypal"]
//     deleted boolean
//   }
