"use strict";

let { db } = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let IdeaComments = {};

const table = "idea_comments";

IdeaComments.create = function(obj) {
  return P.try(() => {
    obj.idea_comments_id = uuid();
    return db(table).insert(obj, ["*"]);
  });
};

// IdeaComments.create({
//   idea_id: "bfc12554-a05c-4ee2-b770-3196fe004ae9",
//   comment_id: "875086e1-b43b-4ff7-bd3d-1b23bd5c3b3f"
// }).then(data => console.log(data));

IdeaComments.update = function(obj) {
  return P.try(() => {
    const { idea_comments_id } = obj;
    delete obj["idea_comments_id"];
    if (!idea_comments_id) return false;
    obj.last_edit_date = new Date();
    return db(table)
      .where({ idea_comments_id: idea_comments_id, deleted: false })
      .update(obj, ["*"]);
  });
};

// IdeaComments.update({
//   idea_comments_id: "6c3f6f2b-77ae-4b18-be32-fdbf3a722d99",
//   comment_id: "875086e1-b43b-4ff7-bd3d-1b23bd5c3b3f"
// }).then(data => console.log(data));

IdeaComments.get = function(obj) {
  return P.try(() => {
    obj.deleted = false;
    return db(table)
      .where(obj)
      .select("*");
  });
};

// IdeaComments.get({
//   comment_id: "875086e1-b43b-4ff7-bd3d-1b23bd5c3b3f"
// }).then(data => console.log(data));

IdeaComments.delete = function(obj) {
  return P.try(() => {
    const { idea_comments_id } = obj;
    delete obj["idea_comments_id"];
    if (!idea_comments_id) return false;
    return db(table)
      .where({ idea_comments_id: idea_comments_id })
      .delete();
  });
};

// IdeaComments.delete({
//   idea_comments_id: "6c3f6f2b-77ae-4b18-be32-fdbf3a722d99"
// }).then(data => console.log(data));

module.exports = IdeaComments;
