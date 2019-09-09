"use strict";

let { db } = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let Projects = {};

const table = "projects";

Projects.create = function(obj) {
  return P.try(() => {
    obj.project_id = uuid();
    return db(table).insert(obj, ["*"]);
  });
};

// Projects.create({
//   creator: "f7839cb9-f287-4e80-9f79-9834949157b4",
//   contributors: "Harish Yadav",
//   settings: { a: 1, b: 3, c: 4 },
//   project_name: "New Project",
//   description: "This is the new project I am working with",
//   tags: ["yolo, yola", "tota"],
//   social_links: ["facebook.com", "twitter.com"],
//   wallet_links: ["stripe.com", "paypal.com", "transferwise"],
//   private: true
// }).then(data => console.log(data));

Projects.update = function(obj) {
  return P.try(() => {
    const { project_id } = obj;
    delete obj["project_id"];
    if (!project_id) return false;
    obj.updated_at = new Date();
    return db(table)
      .where({ project_id: project_id, deleted: false })
      .update(obj, ["*"]);
  });
};

// Projects.update({
//   project_id: "635ccff3-6d3b-43d6-89eb-4713cd867328",
//   contributors: "Harish"
// }).then(data => console.log(data));

Projects.get = function(obj) {
  return P.try(() => {
    obj.deleted = false;
    return db(table)
      .where(obj)
      .select("*");
  });
};

// Projects.get({ creator: "f7839cb9-f287-4e80-9f79-9834949157b4" }).then(data =>
//   console.log(data)
// );

Projects.getAll = async (offset, limit, tag, user_id) => {
  return P.try(() => {
    if (tag) {
      return db(table)
        .select("*")
        .whereRaw(`array_to_string(tags, ',') like '%${tag}%'`)
        .limit(typeof limit === "number" ? limit : "ALL")
        .offset(typeof offset === "number" ? offset : 0);
    }
    return db(table)
      .select("*")
      .limit(typeof limit === "number" ? limit : "ALL")
      .offset(typeof offset === "number" ? offset : 0);
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

// Projects.delete({ project_id: "a62d3d65-b71a-472b-8926-3ccca12543ef" }).then(
//   data => console.log(data)
// );

module.exports = Projects;
