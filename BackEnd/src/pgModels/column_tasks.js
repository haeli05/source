"use strict";

let { db } = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
const upsert = require("knex-upsert");

let ColumnTasks = {};

const table = "column_tasks";

ColumnTasks.create = function(obj) {
  return P.try(() => {
    obj.column_tasks_id = uuid();
    return db(table).insert(obj, ["*"]);
  });
};
// ColumnTasks.create({
//   column_id: "c01ca892-b690-4e4a-8c34-9553cfe5d915",
//   task_id: "88ab4bf1-c359-4e91-af73-0b92392bbc94"
// }).then(data => console.log(data));

ColumnTasks.update = function(obj) {
  return P.try(() => {
    const { column_tasks_id } = obj;
    delete obj["column_tasks_id"];
    if (!column_tasks_id) return false;
    return db(table)
      .where({ column_tasks_id: column_tasks_id, deleted: false })
      .update(obj, ["*"]);
  });
};
// ColumnTasks.update({
//   column_tasks_id: "d0954c9a-b5c0-448a-b0a3-181d10c3a173",
//   task_id: "e24cd1cf-d909-49c8-978c-64e5f29c1477"
// }).then(data => console.log(data));

ColumnTasks.get = function(obj) {
  return P.try(() => {
    obj.deleted = false;
    return db(table)
      .where(obj)
      .select("*");
  });
};
// ColumnTasks.get({
//   column_tasks_id: "d0954c9a-b5c0-448a-b0a3-181d10c3a173"
// }).then(data => console.log(data));

ColumnTasks.delete = function(obj) {
  return P.try(() => {
    const { column_tasks_id } = obj;
    delete obj["column_tasks_id"];
    if (!column_tasks_id) return false;
    return db(table)
      .where({ column_tasks_id: column_tasks_id })
      .delete();
  });
};

// ColumnTasks.delete({
//   column_tasks_id: "d0954c9a-b5c0-448a-b0a3-181d10c3a173"
// }).then(data => console.log(data));

ColumnTasks.upsert = obj => {
  return P.try(() => {
    if (obj.column_tasks_id)
      return upsert({
        db,
        table,
        object: obj,
        key: "column_tasks_id"
      });
    const { column_id, task_id, order } = obj;
    const [columnTask] = ColumnTasks.get({
      column_id,
      task_id
    });
    if (!columnTask)
      return ColumnTasks.create({
        column_id,
        task_id,
        order: typeof order === "number" ? order : 0
      });
    return ColumnTasks.update({
      column_id,
      task_id,
      order: typeof order === "number" ? order : 0
    });
  });
};

module.exports = ColumnTasks;
