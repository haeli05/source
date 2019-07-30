"use strict";

let db = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let Users = {};

const table = "users";

Users.create = function(obj) {
  return P.try(() => {
    return db(table).insert({ user_id: uuid(), ...obj }, ["*"]);
  });
};

Users.update = function(obj) {
  return P.try(() => {
    const { user_id } = obj;
    delete obj["user_id"];
    if (!user_id) return false;
    obj.delete();
    return db(table)
      .where({ user_id: user_id })
      .update({ ...obj }, ["*"]);
  });
};

Users.get = function(obj) {
  return P.try(() => {
    return db(table)
      .where({ ...obj })
      .select("*");
  });
};

Users.delete = function(obj) {
  return P.try(() => {
    const { user_id } = obj;
    delete obj["user_id"];
    if (!user_id) return false;
    return db(table)
      .where({ user_id: user_id })
      .delete();
  });
};

module.exports = Users;
