"use strict";

let { db } = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let Boards = {};

const table = "boards";

Boards.create = function(obj) {
  return P.try(() => {
    obj.board_id = uuid();
    return db(table).insert(obj, ["*"]);
  });
};
// Boards.create({
//   creator: "f7839cb9-f287-4e80-9f79-9834949157b4",
//   title: "Another Board title",
//   description: "This is your board description",
//   tags: ["yolo, yola", "tota"],
//   body: "Another Greate comment Ever"
// }).then(data => console.log(data));

Boards.update = function(obj) {
  return P.try(() => {
    const { board_id } = obj;
    delete obj["board_id"];
    if (!board_id) return false;

    return db(table)
      .where({ board_id: board_id })
      .update(obj, ["*"]);
  });
};

// Boards.update({
//   board_id: "05fcd4ee-67f3-4526-b5ec-126c2cee96ba",
//   description: "This is your another board description"
// }).then(data => console.log(data));

Boards.get = function(obj) {
  return P.try(() => {
    obj.deleted = false;
    return db(table)
      .where(obj)
      .select("*");
  });
};
// Boards.get({ board_id: "05fcd4ee-67f3-4526-b5ec-126c2cee96ba" }).then(data =>
//   console.log(data)
// );

Boards.getAll = async (offset, limit, tag) => {
  console.log("limit: ", limit);
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

Boards.delete = function(obj) {
  return P.try(() => {
    const { board_id } = obj;
    delete obj["board_id"];
    if (!board_id) return false;
    return db(table)
      .where({ board_id: board_id })
      .delete();
  });
};

// Boards.delete({ board_id: "05fcd4ee-67f3-4526-b5ec-126c2cee96ba" }).then(data =>
//   console.log(data)
// );

module.exports = Boards;
