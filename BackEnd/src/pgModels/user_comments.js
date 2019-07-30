"use strict";

let db = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let UserComments = {};

const table = "user_comments";

UserComments.create = function(obj) {
  return P.try(() => {
    return db(table).insert({ user_comments_id: uuid(), ...obj }, ["*"]);
  });
};

UserComments.update = function(obj) {
  return P.try(() => {
    const { user_comments_id } = obj;
    delete obj["user_comments_id"];
    if (!user_comments_id) return false;
    obj.delete();
    return db(table)
      .where({ user_comments_id: user_comments_id })
      .update({ ...obj }, ["*"]);
  });
};

UserComments.get = function(obj) {
  return P.try(() => {
    return db(table)
      .where({ ...obj })
      .select("*");
  });
};

UserComments.delete = function(obj) {
  return P.try(() => {
    const { user_comments_id } = obj;
    delete obj["user_comments_id"];
    if (!user_comments_id) return false;
    return db(table)
      .where({ user_comments_id: user_comments_id })
      .delete();
  });
};

module.exports = UserComments;
