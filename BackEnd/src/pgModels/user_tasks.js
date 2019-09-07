"use strict";

let { db } = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let UserTasks = {};

const table = "user_tasks";

UserTasks.create = function(obj) {
  return P.try(() => {
    obj.user_tasks_id = uuid();
    return db(table).insert(obj, ["*"]);
  });
};
// UserTasks.create({
//   user_id: "f7839cb9-f287-4e80-9f79-9834949157b4",
//   task_id: "88ab4bf1-c359-4e91-af73-0b92392bbc94"
// }).then(data => console.log(data));

UserTasks.update = function(obj) {
  return P.try(() => {
    const { user_tasks_id } = obj;
    delete obj["user_tasks_id"];
    if (!user_tasks_id) return false;
    obj.last_edit_date = new Date();
    return db(table)
      .where({ user_tasks_id: user_tasks_id, deleted: false })
      .update(obj, ["*"]);
  });
};

// UserTasks.update({
//   user_tasks_id: "dfe2a9ee-b3bd-4dbb-b7fe-7e6132fb3c7c",
//   task_id: "e24cd1cf-d909-49c8-978c-64e5f29c1477"
// }).then(data => console.log(data));

UserTasks.get = function(obj) {
  return P.try(() => {
    obj.deleted = false;
    return db(table)
      .where(obj)
      .select("*");
  });
};
// UserTasks.get({ user_id: "f7839cb9-f287-4e80-9f79-9834949157b4" }).then(data =>
//   console.log(data)
// );

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
// UserTasks.delete({
//   user_tasks_id: "dbde2ab1-aa25-4434-b80b-71ecb0219854"
// }).then(data => console.log(data));

module.exports = UserTasks;
