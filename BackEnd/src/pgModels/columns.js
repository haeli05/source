"use strict";

let { db } = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
const upsert = require("knex-upsert");

let Columns = {};

const table = "columns";

Columns.create = function(obj) {
  return P.try(() => {
    obj.column_id = uuid();
    return db(table).insert(obj, ["*"]);
  });
};

// Columns.create({
//   board_id: "42e0d014-ba6c-4412-b1f3-b6ff5b3a4d6d",
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
      .where({ column_id: column_id, deleted: false })
      .update(obj, ["*"]);
  });
};

// Columns.update({
//   column_id: "f6a11f56-1b32-4ff8-a5a7-f5e18cce4b54",
//   title: "Good Column"
// }).then(data => console.log(data));

Columns.get = function(obj) {
  return P.try(() => {
    obj.deleted = false;
    return db(table)
      .where(obj)
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

Columns.upsert = async obj => {
  return P.try(() => {
    return upsert({
      db,
      table,
      object: obj,
      key: "column_id"
    });
  });
};

// const obj = {
//   column_id: "03701dde-13ad-4bde-bc74-da137283e89f",
//   board_id: "42e0d014-ba6c-4412-b1f3-b6ff5b3a4d6d",
//   title: "Column - Another title",
//   private: false,
//   tags: ["yolo, yola", "tota"],
//   created_at: "2019-08-28T15:18:16.875Z",
//   last_edit_date: "2019-08-28T15:18:16.875Z",
//   deleted: false
// };

// Columns.upsert(obj).then(x => console.log(x));
module.exports = Columns;
