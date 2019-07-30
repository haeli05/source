"use strict";

let db = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let Projects = {};

const table = "projects";

Projects.create = function(obj) {
  return P.try(() => {
    return db(table).insert({ project_id: uuid(), ...obj }, ["*"]);
  });
};

Projects.update = function(obj) {
  return P.try(() => {
    const { project_id } = obj;
    delete obj["project_id"];
    if (!project_id) return false;
    obj.delete();
    return db(table)
      .where({ project_id: project_id })
      .update({ ...obj }, ["*"]);
  });
};

Projects.get = function(obj) {
  return P.try(() => {
    return db(table)
      .where({ ...obj })
      .select("*");
  });
};

Projects.delete = function(obj) {
  return P.try(() => {
    const { project_id } = obj;
    delete obj["project_id"];
    if (!project_id) return false;
    return db(table)
      .where({ project_id: project_id })
      .delete();
  });
};

module.exports = Projects;
