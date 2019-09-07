"use strict";

let { db } = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let Comments = {};

const table = "comments";

Comments.create = function(obj) {
  return P.try(() => {
    obj.comment_id = uuid();
    return db(table).insert(obj, ["*"]);
  });
};

// Comments.create({
//   user: "f7839cb9-f287-4e80-9f79-9834949157b4",
//   body: "Another Greate comment Ever",
//   upvotes: 100
// }).then(data => console.log(data));

Comments.update = function(obj) {
  return P.try(() => {
    const { comment_id } = obj;
    delete obj["comment_id"];
    if (!comment_id) return false;
    obj.last_edit_date = new Date();
    return db(table)
      .where({ comment_id: comment_id, deleted: false })
      .update(obj, ["*"]);
  });
};

// Comments.update({
//   comment_id: "875086e1-b43b-4ff7-bd3d-1b23bd5c3b3f",
//   body: "Another Greate comment Ever"
// }).then(data => console.log(data));

Comments.get = function(obj) {
  return P.try(() => {
    obj.deleted = false;
    return db(table)
      .where(obj)
      .select("*");
  });
};
// Comments.get({ user: "f7839cb9-f287-4e80-9f79-9834949157b4" }).then(data =>
//   console.log(data)
// );

Comments.delete = function(obj) {
  return P.try(() => {
    const { comment_id } = obj;
    delete obj["comment_id"];
    if (!comment_id) return false;
    return db(table)
      .where({ comment_id: comment_id })
      .delete();
  });
};
// Comments.delete({ comment_id: "530f4c1c-2ac9-4c24-8dbb-a226bc57adb6" }).then(
//   data => console.log(data)
// );
module.exports = Comments;
