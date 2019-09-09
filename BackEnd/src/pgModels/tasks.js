"use strict";

let { db } = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
const upsert = require("knex-upsert");

let Tasks = {};

const table = "tasks";

Tasks.create = function(obj) {
  return P.try(() => {
    obj.task_id = uuid();
    return db(table).insert(obj, ["*"]);
  });
};

// Tasks.create({
//   board_id: "515482f5-4b7a-4405-99b1-f14247564dee",
//   creator: "f7839cb9-f287-4e80-9f79-9834949157b4",
//   column_id: "c01ca892-b690-4e4a-8c34-9553cfe5d915",
//   created: "created",
//   title: "another task title",
//   content: "this is some content for task",
//   compensation: 50,
//   private: false,
//   tags: ["yolo, yola", "tota"],
//   private: false,
//   completed: false
// }).then(data => console.log(data));

Tasks.update = function(obj) {
  return P.try(() => {
    const { task_id } = obj;
    delete obj["task_id"];
    if (!task_id) return false;
    obj.last_edit_date = new Date();
    return db(table)
      .where({ task_id: task_id, deleted: false })
      .update(obj, ["*"]);
  });
};

// Tasks.update({
//   task_id: "8268f67f-366a-40e9-916a-2941b71dc610",
//   title: "Good task"
// }).then(data => console.log(data));

Tasks.get = function(obj) {
  return P.try(() => {
    obj.deleted = false;
    return db(table)
      .where(obj)
      .select("*");
  });
};

// Tasks.get({ title: "Good task" }).then(data => console.log(data));

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
// Tasks.delete({ task_id: "8268f67f-366a-40e9-916a-2941b71dc610" }).then(data =>
//   console.log(data)
// );

Tasks.upsert = async obj => {
  obj.deleted = false;
  return P.try(() => {
    return upsert({
      db,
      table,
      object: obj,
      key: "task_id"
    });
  });
};

module.exports = Tasks;
