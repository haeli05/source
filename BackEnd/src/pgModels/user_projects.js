"use strict";

let { db } = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let UserProjects = {};

const table = "user_projects";

UserProjects.create = function(obj) {
  return P.try(() => {
    obj.user_projects_id = uuid();
    return db(table).insert(obj, ["*"]);
  });
};
// UserProjects.create({
//   user_id: "f7839cb9-f287-4e80-9f79-9834949157b4",
//   project_id: "635ccff3-6d3b-43d6-89eb-4713cd867328"
// }).then(data => console.log(data));

UserProjects.update = function(obj) {
  return P.try(() => {
    const { user_projects_id } = obj;
    delete obj["user_projects_id"];
    if (!user_projects_id) return false;
    return db(table)
      .where({ user_projects_id: user_projects_id })
      .update(obj, ["*"]);
  });
};
// UserProjects.update({
//   user_projects_id: "a0e006dd-7187-4ac5-8866-66211d312fc1",
//   project_id: "635ccff3-6d3b-43d6-89eb-4713cd867328"
// }).then(data => console.log(data));

UserProjects.get = function(obj) {
  return P.try(() => {
    obj.deleted = false;
    return db(table)
      .where(obj)
      .select("*");
  });
};
// UserProjects.get({
//   project_id: "635ccff3-6d3b-43d6-89eb-4713cd867328"
// }).then(data => console.log(data));

UserProjects.delete = function(obj) {
  return P.try(() => {
    const { user_projects_id } = obj;
    delete obj["user_projects_id"];
    if (!user_projects_id) return false;
    return db(table)
      .where({ user_projects_id: user_projects_id })
      .delete();
  });
};
// UserProjects.delete({
//   user_projects_id: "a0e006dd-7187-4ac5-8866-66211d312fc1"
// }).then(data => console.log(data));

module.exports = UserProjects;
