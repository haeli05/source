"use strict";

let db = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let Ideas = {};

const table = "ideas";

Ideas.create = function(obj) {
  return P.try(() => {
    return db(table).insert({ idea_id: uuid(), ...obj }, ["*"]);
  });
};

Ideas.update = function(obj) {
  return P.try(() => {
    const { idea_id } = obj;
    delete obj["idea_id"];
    if (!idea_id) return false;
    obj.delete();
    return db(table)
      .where({ idea_id: idea_id })
      .update({ ...obj }, ["*"]);
  });
};

Ideas.get = function(obj) {
  return P.try(() => {
    return db(table)
      .where({ ...obj })
      .select("*");
  });
};

Ideas.delete = function(obj) {
  return P.try(() => {
    const { idea_id } = obj;
    delete obj["idea_id"];
    if (!idea_id) return false;
    return db(table)
      .where({ idea_id: idea_id })
      .delete();
  });
};

module.exports = Ideas;
