"use strict";

let db = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let Boards = {};

const table = "boards";

Boards.create = function(obj) {
  return P.try(() => {
    return db(table).insert({ board_id: uuid(), ...obj }, ["*"]);
  });
};

Boards.update = function(obj) {
  return P.try(() => {
    const { board_id } = obj;
    delete obj["board_id"];
    if (!board_id) return false;
    obj.delete();
    return db(table)
      .where({ board_id: board_id })
      .update({ ...obj }, ["*"]);
  });
};

Boards.get = function(obj) {
  return P.try(() => {
    return db(table)
      .where({ ...obj })
      .select("*");
  });
};

Boards.delete = function(obj) {
  return P.try(() => {
    const { board_id } = obj;
    delete obj["board_id"];
    if (!board_id) return false;
    return db(table)
      .where({ board_id: board_id })
      .delete();
  });
};

module.exports = Boards;
