"use strict";

let db = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let UserIdeas = {};

const table = "user_ideas";

UserIdeas.create = function(obj) {
  return P.try(() => {
    return db(table).insert({ user_ideas_id: uuid(), ...obj }, ["*"]);
  });
};

UserIdeas.update = function(obj) {
  return P.try(() => {
    const { user_ideas_id } = obj;
    delete obj["user_ideas_id"];
    if (!user_ideas_id) return false;
    obj.delete();
    return db(table)
      .where({ user_ideas_id: user_ideas_id })
      .update({ ...obj }, ["*"]);
  });
};

UserIdeas.get = function(obj) {
  return P.try(() => {
    return db(table)
      .where({ ...obj })
      .select("*");
  });
};

UserIdeas.delete = function(obj) {
  return P.try(() => {
    const { user_ideas_id } = obj;
    delete obj["user_ideas_id"];
    if (!user_ideas_id) return false;
    return db(table)
      .where({ user_ideas_id: user_ideas_id })
      .delete();
  });
};

module.exports = UserIdeas;
