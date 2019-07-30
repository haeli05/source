"use strict";

let db = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let ProjectIdeas = {};

const table = "project_ideas";

ProjectIdeas.create = function(obj) {
  return P.try(() => {
    return db(table).insert({ project_ideas_id: uuid(), ...obj }, ["*"]);
  });
};

ProjectIdeas.update = function(obj) {
  return P.try(() => {
    const { project_ideas_id } = obj;
    delete obj["project_ideas_id"];
    if (!project_ideas_id) return false;
    obj.delete();
    return db(table)
      .where({ project_ideas_id: project_ideas_id })
      .update({ ...obj }, ["*"]);
  });
};

ProjectIdeas.get = function(obj) {
  return P.try(() => {
    return db(table)
      .where({ ...obj })
      .select("*");
  });
};

ProjectIdeas.delete = function(obj) {
  return P.try(() => {
    const { project_ideas_id } = obj;
    delete obj["project_ideas_id"];
    if (!project_ideas_id) return false;
    return db(table)
      .where({ project_ideas_id: project_ideas_id })
      .delete();
  });
};

module.exports = ProjectIdeas;
