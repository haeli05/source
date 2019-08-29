"use strict";

let { db } = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let ProjectPermissions = {};

const table = "project_permissions";

ProjectPermissions.create = function(obj) {
  return P.try(() => {
    obj.project_permissions_id = uuid();
    return db(table).insert(obj, ["*"]);
  });
};
// ProjectPermissions.create({
//   project_id: "635ccff3-6d3b-43d6-89eb-4713cd867328",
//   user_id: "f7839cb9-f287-4e80-9f79-9834949157b4"
// }).then(data => console.log(data));

ProjectPermissions.update = function(obj) {
  return P.try(() => {
    const { project_permissions_id } = obj;
    delete obj["project_permissions_id"];
    if (!project_permissions_id) return false;
    obj.last_edit_date = new Date();
    return db(table)
      .where({ project_permissions_id: project_permissions_id, deleted: false })
      .update(obj, ["*"]);
  });
};
// ProjectPermissions.update({
//   project_permissions_id: "57f94738-610d-43ac-be82-45e79e09f888",
//   user_id: "f7839cb9-f287-4e80-9f79-9834949157b4"
// }).then(data => console.log(data));

ProjectPermissions.get = function(obj) {
  return P.try(() => {
    obj.deleted = false;
    return db(table)
      .where(obj)
      .select("*");
  });
};
// ProjectPermissions.get({
//   user_id: "f7839cb9-f287-4e80-9f79-9834949157b4"
// }).then(data => console.log(data));

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
// ProjectPermissions.delete({
//   project_permissions_id: "cbf17adb-d3e3-4697-8e14-f9200b11c9da"
// }).then(data => console.log(data));

module.exports = ProjectPermissions;
