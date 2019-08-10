"use strict";

let { db } = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let Ideas = {};

const table = "ideas";

Ideas.create = function(obj) {
  return P.try(() => {
    obj.idea_id = uuid();
    return db(table).insert(obj, ["*"]);
  });
};

// Ideas.create({
//   idea_name: "Best Idea Ever",
//   body: "This is the new project I am working with",
//   string_body: "This is the new project I am working with",
//   creator: "0baa3e37-0606-4745-8887-1df0432c0b8d",
//   tags: ["harish, yola", "tota"],
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
      .update(obj, ["*"]);
  });
};

// Ideas.update({
//   idea_id: "c0ceacd9-6037-487d-b9c1-761b76234199",
//   idea_name: "Another Great Idea"
// }).then(data => console.log(data));

Ideas.get = function(obj) {
  return P.try(() => {
    return db(table)
      .where(obj)
      .select("*");
  });
};

// return db(table)
// .whereRaw(`array_to_string(tags, ',') like '%harish%'`)
// .select("*");

// Ideas.get({ idea_name: "Another Great Idea" }).then(data => console.log(data));

// Ideas.getAll = async (limit, last, tag) => {
//   console.log("last: ", last, { idea_id: last });
//   try {
//     const lastIdea = await Ideas.get({ idea_id: last });
//     console.log("lastIdea: ", lastIdea[0].created);

//     const rawWheres = [];
//     if (last)
//       rawWheres.push(
//         `created < to_timestamp(${new Date(lastIdea[0].created).now()})`
//       );
//     const list = await db(table)
//       .whereRaw(rawWheres[0])
//       .select("*");
//     console.log("list: ", list);
//   } catch (error) {
//     return false;
//   }
// };

// Ideas.getAll(100, "0f580b1b-3016-4af3-9e36-e76d9008b34d");

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
