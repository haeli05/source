"use strict";

let { db } = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let TaskAssignedTo = {};

const table = "task_assigned_to";

TaskAssignedTo.create = function(obj) {
  return P.try(() => {
    obj.task_assigned_to_id = uuid();
    return db(table).insert(obj, ["*"]);
  });
};
// TaskAssignedTo.create({
//   task_id: "e24cd1cf-d909-49c8-978c-64e5f29c1477",
//   user_id: "f7839cb9-f287-4e80-9f79-9834949157b4"
// }).then(data => console.log(data));

TaskAssignedTo.update = function(obj) {
  return P.try(() => {
    const { task_assigned_to_id } = obj;
    delete obj["task_assigned_to_id"];
    if (!task_assigned_to_id) return false;

    return db(table)
      .where({ task_assigned_to_id: task_assigned_to_id })
      .update(obj, ["*"]);
  });
};
// TaskAssignedTo.update({
//   task_assigned_to_id: "e2ea8125-44a9-4d31-8873-ef69484ce84b",
//   user_id: "f7839cb9-f287-4e80-9f79-9834949157b4"
// }).then(data => console.log(data));

TaskAssignedTo.get = function(obj) {
  return P.try(() => {
    return db(table)
      .where(obj)
      .select("*");
  });
};
// TaskAssignedTo.get({
//   user_id: "f7839cb9-f287-4e80-9f79-9834949157b4"
// }).then(data => console.log(data));

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
// TaskAssignedTo.delete({
//   task_assigned_to_id: "e2ea8125-44a9-4d31-8873-ef69484ce84b"
// }).then(data => console.log(data));

module.exports = TaskAssignedTo;
