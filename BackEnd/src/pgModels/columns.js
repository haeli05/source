"use strict";

let { db } = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let Columns = {};

const table = "columns";

Columns.create = function(obj) {
  return P.try(() => {
    return db(table).insert({ column_id: uuid(), ...obj }, ["*"]);
  });
};

// Columns.create({
//   board_id: "515482f5-4b7a-4405-99b1-f14247564dee",
//   title: "Column - title",
//   private: false,
//   tags: ["yolo, yola", "tota"]
// }).then(data => console.log(data));

Columns.update = function(obj) {
  return P.try(() => {
    const { column_id } = obj;
    delete obj["column_id"];
    if (!column_id) return false;

    return db(table)
      .where({ column_id: column_id })
      .update({ ...obj }, ["*"]);
  });
};

// Columns.update({
//   column_id: "f6a11f56-1b32-4ff8-a5a7-f5e18cce4b54",
//   title: "Good Column"
// }).then(data => console.log(data));

Columns.get = function(obj) {
  return P.try(() => {
    return db(table)
      .where({ ...obj })
      .select("*");
  });
};
// Columns.get({ title: "Good Column" }).then(data => console.log(data));

Columns.delete = function(obj) {
  return P.try(() => {
    const { column_id } = obj;
    delete obj["column_id"];
    if (!column_id) return false;
    return db(table)
      .where({ column_id: column_id })
      .delete();
  });
};

// Columns.delete({ column_id: "f6a11f56-1b32-4ff8-a5a7-f5e18cce4b54" }).then(
//   data => console.log(data)
// );

module.exports = Columns;
