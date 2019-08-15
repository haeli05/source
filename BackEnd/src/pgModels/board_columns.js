"use strict";

let { db } = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let BoardColumns = {};

const table = "board_columns";

BoardColumns.create = function(obj) {
  return P.try(() => {
    obj.board_columns_id = uuid();
    return db(table).insert(obj, ["*"]);
  });
};

// BoardColumns.create({
//   board_id: "515482f5-4b7a-4405-99b1-f14247564dee",
//   column_id: "c01ca892-b690-4e4a-8c34-9553cfe5d915"
// }).then(data => console.log(data));

BoardColumns.update = function(obj) {
  return P.try(() => {
    const { board_columns_id } = obj;
    delete obj["board_columns_id"];
    if (!board_columns_id) return false;

    return db(table)
      .where({ board_columns_id: board_columns_id })
      .update({ ...obj }, ["*"]);
  });
};
// BoardColumns.update({
//   board_columns_id: "182c1fe9-3031-40e8-b1bc-364644a81bb7",
//   column_id: "c01ca892-b690-4e4a-8c34-9553cfe5d915"
// }).then(data => console.log(data));

BoardColumns.get = function(obj) {
  return P.try(() => {
    return db(table)
      .where(obj)
      .select("*");
  });
};
// BoardColumns.get({
//   board_id: "515482f5-4b7a-4405-99b1-f14247564dee"
// }).then(data => console.log(data));

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
// BoardColumns.delete({
//   board_columns_id: "182c1fe9-3031-40e8-b1bc-364644a81bb7"
// }).then(data => console.log(data));

module.exports = BoardColumns;
