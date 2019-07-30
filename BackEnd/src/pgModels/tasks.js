"use strict";

let db = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let Tasks = {};

const table = "tasks";

Tasks.create = function(obj) {
  return P.try(() => {
    return db(table).insert({ task_id: uuid(), ...obj }, ["*"]);
  });
};

Tasks.update = function(obj) {
  return P.try(() => {
    const { task_id } = obj;
    delete obj["task_id"];
    if (!task_id) return false;
    obj.delete();
    return db(table)
      .where({ task_id: task_id })
      .update({ ...obj }, ["*"]);
  });
};

Tasks.get = function(obj) {
  return P.try(() => {
    return db(table)
      .where({ ...obj })
      .select("*");
  });
};

Tasks.delete = function(obj) {
  return P.try(() => {
    const { task_id } = obj;
    delete obj["task_id"];
    if (!task_id) return false;
    return db(table)
      .where({ task_id: task_id })
      .delete();
  });
};

module.exports = Tasks;
