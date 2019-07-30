"use strict";

let db = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let UserFollowers = {};

const table = "user_followers";

UserFollowers.create = function(obj) {
  return P.try(() => {
    return db(table).insert({ user_followers_id: uuid(), ...obj }, ["*"]);
  });
};

UserFollowers.update = function(obj) {
  return P.try(() => {
    const { user_followers_id } = obj;
    delete obj["user_followers_id"];
    if (!user_followers_id) return false;
    obj.delete();
    return db(table)
      .where({ user_followers_id: user_followers_id })
      .update({ ...obj }, ["*"]);
  });
};

UserFollowers.get = function(obj) {
  return P.try(() => {
    return db(table)
      .where({ ...obj })
      .select("*");
  });
};

UserFollowers.delete = function(obj) {
  return P.try(() => {
    const { user_followers_id } = obj;
    delete obj["user_followers_id"];
    if (!user_followers_id) return false;
    return db(table)
      .where({ user_followers_id: user_followers_id })
      .delete();
  });
};

module.exports = UserFollowers;
