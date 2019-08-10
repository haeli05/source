"use strict";

let { db } = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let ProjectIdeas = {};

const table = "project_ideas";

ProjectIdeas.create = function(obj) {
  return P.try(() => {
    obj.project_ideas_id = uuid();
    return db(table).insert(obj, ["*"]);
  });
};
// ProjectIdeas.create({
//   project_id: "635ccff3-6d3b-43d6-89eb-4713cd867328",
//   idea_id: "bfc12554-a05c-4ee2-b770-3196fe004ae9"
// }).then(data => console.log(data));

ProjectIdeas.update = function(obj) {
  return P.try(() => {
    const { project_ideas_id } = obj;
    delete obj["project_ideas_id"];
    if (!project_ideas_id) return false;

    return db(table)
      .where({ project_ideas_id: project_ideas_id })
      .update(obj, ["*"]);
  });
};
// ProjectIdeas.update({
//   project_ideas_id: "8f7dcae9-2855-42c0-a2e7-ebe4392aaa8c",
//   idea_id: "bfc12554-a05c-4ee2-b770-3196fe004ae9"
// }).then(data => console.log(data));

ProjectIdeas.get = function(obj) {
  return P.try(() => {
    return db(table)
      .where(obj)
      .select("*");
  });
};
// ProjectIdeas.get({
//   idea_id: "bfc12554-a05c-4ee2-b770-3196fe004ae9"
// }).then(data => console.log(data));

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
// ProjectIdeas.delete({
//   project_ideas_id: "8f7dcae9-2855-42c0-a2e7-ebe4392aaa8c"
// }).then(data => console.log(data));

module.exports = ProjectIdeas;
