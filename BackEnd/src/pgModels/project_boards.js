"use strict";

let db = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let ProjectBoards = {};

const table = "project_boards";

ProjectBoards.create = function(obj) {
  return P.try(() => {
    return db(table).insert({ project_boards_id: uuid(), ...obj }, ["*"]);
  });
};

ProjectBoards.update = function(obj) {
  return P.try(() => {
    const { project_boards_id } = obj;
    delete obj["project_boards_id"];
    if (!project_boards_id) return false;
    obj.delete();
    return db(table)
      .where({ project_boards_id: project_boards_id })
      .update({ ...obj }, ["*"]);
  });
};

ProjectBoards.get = function(obj) {
  return P.try(() => {
    return db(table)
      .where({ ...obj })
      .select("*");
  });
};

ProjectBoards.delete = function(obj) {
  return P.try(() => {
    const { project_boards_id } = obj;
    delete obj["project_boards_id"];
    if (!project_boards_id) return false;
    return db(table)
      .where({ project_boards_id: project_boards_id })
      .delete();
  });
};

module.exports = ProjectBoards;
