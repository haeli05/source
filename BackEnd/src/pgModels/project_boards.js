"use strict";

let { db } = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let ProjectBoards = {};

const table = "project_boards";

ProjectBoards.create = function(obj) {
  return P.try(() => {
    obj.project_boards_id = uuid();
    return db(table).insert(obj, ["*"]);
  });
};

// ProjectBoards.create({
//   project_id: "635ccff3-6d3b-43d6-89eb-4713cd867328",
//   board_id: "515482f5-4b7a-4405-99b1-f14247564dee"
// }).then(data => console.log(data));

ProjectBoards.update = function(obj) {
  return P.try(() => {
    const { project_boards_id } = obj;
    delete obj["project_boards_id"];
    if (!project_boards_id) return false;

    return db(table)
      .where({ project_boards_id: project_boards_id })
      .update(obj, ["*"]);
  });
};
// ProjectBoards.update({
//   project_boards_id: "4d4c43a4-7e90-46fe-b9ea-54bc20d4aee2",
//   board_id: "515482f5-4b7a-4405-99b1-f14247564dee"
// }).then(data => console.log(data));

ProjectBoards.get = function(obj) {
  return P.try(() => {
    return db(table)
      .where(obj)
      .select("*");
  });
};
// ProjectBoards.get({
//   board_id: "515482f5-4b7a-4405-99b1-f14247564dee"
// }).then(data => console.log(data));

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
// ProjectBoards.delete({
//   project_boards_id: "4d4c43a4-7e90-46fe-b9ea-54bc20d4aee2"
// }).then(data => console.log(data));

module.exports = ProjectBoards;
