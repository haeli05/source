"use strict";

let db = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let IdeaComments = {};

const table = "idea_comments";

IdeaComments.create = function(obj) {
  return P.try(() => {
    return db(table).insert({ idea_comments_id: uuid(), ...obj }, ["*"]);
  });
};

IdeaComments.update = function(obj) {
  return P.try(() => {
    const { idea_comments_id } = obj;
    delete obj["idea_comments_id"];
    if (!idea_comments_id) return false;
    obj.delete();
    return db(table)
      .where({ idea_comments_id: idea_comments_id })
      .update({ ...obj }, ["*"]);
  });
};

IdeaComments.get = function(obj) {
  return P.try(() => {
    return db(table)
      .where({ ...obj })
      .select("*");
  });
};

IdeaComments.delete = function(obj) {
  return P.try(() => {
    const { idea_comments_id } = obj;
    delete obj["idea_comments_id"];
    if (!idea_comments_id) return false;
    return db(table)
      .where({ idea_comments_id: idea_comments_id })
      .delete();
  });
};

module.exports = IdeaComments;
