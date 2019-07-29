const environment = process.env.NODE_ENV || "development";
const config = require("../knexfile.js")[environment];
const db = require("knex")(config);

module.exports = {
  db
};
