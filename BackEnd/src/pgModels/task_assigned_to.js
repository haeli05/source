"use strict";

let db = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let TaskAssignedTo = {};

const table = "task_assigned_to";

TaskAssignedTo.create = function(obj) {
  return P.try(() => {
    return db(table).insert({ task_assigned_to_id: uuid(), ...obj }, ["*"]);
  });
};

TaskAssignedTo.update = function(obj) {
  return P.try(() => {
    const { task_assigned_to_id } = obj;
    delete obj["task_assigned_to_id"];
    if (!task_assigned_to_id) return false;
    obj.delete();
    return db(table)
      .where({ task_assigned_to_id: task_assigned_to_id })
      .update({ ...obj }, ["*"]);
  });
};

TaskAssignedTo.get = function(obj) {
  return P.try(() => {
    return db(table)
      .where({ ...obj })
      .select("*");
  });
};

TaskAssignedTo.delete = function(obj) {
  return P.try(() => {
    const { task_assigned_to_id } = obj;
    delete obj["task_assigned_to_id"];
    if (!task_assigned_to_id) return false;
    return db(table)
      .where({ task_assigned_to_id: task_assigned_to_id })
      .delete();
  });
};

module.exports = TaskAssignedTo;
