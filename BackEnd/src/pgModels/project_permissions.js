"use strict";

let db = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let ProjectPermissions = {};

const table = "project_permissions";

ProjectPermissions.create = function(obj) {
  return P.try(() => {
    return db(table).insert({ project_permissions_id: uuid(), ...obj }, ["*"]);
  });
};

ProjectPermissions.update = function(obj) {
  return P.try(() => {
    const { project_permissions_id } = obj;
    delete obj["project_permissions_id"];
    if (!project_permissions_id) return false;
    obj.delete();
    return db(table)
      .where({ project_permissions_id: project_permissions_id })
      .update({ ...obj }, ["*"]);
  });
};

ProjectPermissions.get = function(obj) {
  return P.try(() => {
    return db(table)
      .where({ ...obj })
      .select("*");
  });
};

ProjectPermissions.delete = function(obj) {
  return P.try(() => {
    const { project_permissions_id } = obj;
    delete obj["project_permissions_id"];
    if (!project_permissions_id) return false;
    return db(table)
      .where({ project_permissions_id: project_permissions_id })
      .delete();
  });
};

module.exports = ProjectPermissions;
