"use strict";

let { db } = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let Ideas = {};

const table = "ideas";

Ideas.create = function(obj) {
  return P.try(() => {
    return db(table).insert({ idea_id: uuid(), ...obj }, ["*"]);
  });
};

// Ideas.create({
//   idea_name: "Best Idea Ever",
//   body: "This is the new project I am working with",
//   string_body: "This is the new project I am working with",
//   creator: "f7839cb9-f287-4e80-9f79-9834949157b4",
//   tags: ["yolo, yola", "tota"],
//   upvotes: 100,
//   private: true
// }).then(data => console.log(data));

Ideas.update = function(obj) {
  return P.try(() => {
    const { idea_id } = obj;
    delete obj["idea_id"];
    if (!idea_id) return false;
    return db(table)
      .where({ idea_id: idea_id })
      .update({ ...obj }, ["*"]);
  });
};

// Ideas.update({
//   idea_id: "c0ceacd9-6037-487d-b9c1-761b76234199",
//   idea_name: "Another Great Idea"
// }).then(data => console.log(data));

Ideas.get = function(obj) {
  return P.try(() => {
    return db(table)
      .where({ ...obj })
      .select("*");
  });
};

// Ideas.get({ idea_name: "Another Great Idea" }).then(data => console.log(data));

Ideas.delete = function(obj) {
  return P.try(() => {
    const { idea_id } = obj;
    delete obj["idea_id"];
    if (!idea_id) return false;
    return db(table)
      .where({ idea_id: idea_id })
      .delete();
  });
};

// Ideas.delete({ idea_id: "c0ceacd9-6037-487d-b9c1-761b76234199" }).then(data =>
//   console.log(data)
// );

module.exports = Ideas;
