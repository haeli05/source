"use strict";

let db = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let UserTasks = {};

const table = "user_tasks";

UserTasks.create = function(obj) {
  return P.try(() => {
    return db(table).insert({ user_tasks_id: uuid(), ...obj }, ["*"]);
  });
};

UserTasks.update = function(obj) {
  return P.try(() => {
    const { user_tasks_id } = obj;
    delete obj["user_tasks_id"];
    if (!user_tasks_id) return false;
    obj.delete();
    return db(table)
      .where({ user_tasks_id: user_tasks_id })
      .update({ ...obj }, ["*"]);
  });
};

UserTasks.get = function(obj) {
  return P.try(() => {
    return db(table)
      .where({ ...obj })
      .select("*");
  });
};

UserTasks.delete = function(obj) {
  return P.try(() => {
    const { user_tasks_id } = obj;
    delete obj["user_tasks_id"];
    if (!user_tasks_id) return false;
    return db(table)
      .where({ user_tasks_id: user_tasks_id })
      .delete();
  });
};

module.exports = UserTasks;
