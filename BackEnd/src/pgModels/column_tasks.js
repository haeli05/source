"use strict";

let db = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let ColumnTasks = {};

const table = "column_tasks";

ColumnTasks.create = function(obj) {
  return P.try(() => {
    return db(table).insert({ column_tasks_id: uuid(), ...obj }, ["*"]);
  });
};

ColumnTasks.update = function(obj) {
  return P.try(() => {
    const { column_tasks_id } = obj;
    delete obj["column_tasks_id"];
    if (!column_tasks_id) return false;
    obj.delete();
    return db(table)
      .where({ user_id: column_tasks_id })
      .update({ ...obj }, ["*"]);
  });
};

ColumnTasks.get = function(obj) {
  return P.try(() => {
    return db(table)
      .where({ ...obj })
      .select("*");
  });
};

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

module.exports = ColumnTasks;
