"use strict";

let db = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let Comments = {};

const table = "comments";

Comments.create = function(obj) {
  return P.try(() => {
    return db(table).insert({ comment_id: uuid(), ...obj }, ["*"]);
  });
};

Comments.update = function(obj) {
  return P.try(() => {
    const { comment_id } = obj;
    delete obj["comment_id"];
    if (!comment_id) return false;
    obj.delete();
    return db(table)
      .where({ comment_id: comment_id })
      .update({ ...obj }, ["*"]);
  });
};

Comments.get = function(obj) {
  return P.try(() => {
    return db(table)
      .where({ ...obj })
      .select("*");
  });
};

Comments.delete = function(obj) {
  return P.try(() => {
    const { comment_id } = obj;
    delete obj["comment_id"];
    if (!comment_id) return false;
    return db(table)
      .where({ comment_id: comment_id })
      .delete();
  });
};

module.exports = Comments;
