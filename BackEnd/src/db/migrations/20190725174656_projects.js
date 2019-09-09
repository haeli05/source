exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("projects", table => {
      table
        .string("project_id")
        .primary()
        .unique();
      table
        .string("creator")
        .references("user_id")
        .inTable("users")
        .onDelete("cascade");
      table.string("contributors");
      table.json("settings");
      table.string("project_name");
      table
        .timestamp("created")
        .notNullable()
        .defaultTo(knex.fn.now());
      table.text("description");
      table.specificType("tags", "text ARRAY"); //we need to enforce array size in app logic as postgres doesn't enforce any such logic
      table.specificType("social_links", "text ARRAY");
      table.specificType("wallet_links", "text ARRAY");
      table.boolean("private");
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
//   project_id varchar [pk, unique]
//   creator varchar [ref: > users.user_id]
//   contributors varchar
//   settings json [note: "JSON object of permission types and their users. i.e. {admin:[...], supporters:[...]}"]
//   project_name varchar
//   created datetime
//   description varchar [note: "Rich text with html tags"]
//   tags array[varchar] [note: "Max 10"]
//   social_links array[varchar]
//   wallet_links array[varchar] [note: "Links to crypto wallets or paypal"]
//   private boolean
//   deleted boolean
// }
