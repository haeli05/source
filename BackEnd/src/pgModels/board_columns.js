"use strict";

let db = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let BoardColumns = {};

const table = "board_columns";

BoardColumns.create = function(obj) {
  return P.try(() => {
    return db(table).insert({ board_columns_id: uuid(), ...obj }, ["*"]);
  });
};

BoardColumns.update = function(obj) {
  return P.try(() => {
    const { board_columns_id } = obj;
    delete obj["board_columns_id"];
    if (!board_columns_id) return false;
    obj.delete();
    return db(table)
      .where({ user_id: board_columns_id })
      .update({ ...obj }, ["*"]);
  });
};

BoardColumns.get = function(obj) {
  return P.try(() => {
    return db(table)
      .where({ ...obj })
      .select("*");
  });
};

BoardColumns.delete = function(obj) {
  return P.try(() => {
    const { board_columns_id } = obj;
    delete obj["board_columns_id"];
    if (!board_columns_id) return false;
    return db(table)
      .where({ board_columns_id: board_columns_id })
      .delete();
  });
};

module.exports = BoardColumns;
