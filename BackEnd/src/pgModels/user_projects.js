"use strict";

let db = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let UserProjects = {};

const table = "user_projects";

UserProjects.create = function(obj) {
  return P.try(() => {
    return db(table).insert({ user_projects_id: uuid(), ...obj }, ["*"]);
  });
};

UserProjects.update = function(obj) {
  return P.try(() => {
    const { user_projects_id } = obj;
    delete obj["user_projects_id"];
    if (!user_projects_id) return false;
    obj.delete();
    return db(table)
      .where({ user_projects_id: user_projects_id })
      .update({ ...obj }, ["*"]);
  });
};

UserProjects.get = function(obj) {
  return P.try(() => {
    return db(table)
      .where({ ...obj })
      .select("*");
  });
};

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

module.exports = UserProjects;
