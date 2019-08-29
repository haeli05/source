"use strict";

let { db } = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let UserComments = {};

const table = "user_comments";

UserComments.create = function(obj) {
  return P.try(() => {
    obj.user_comments_id = uuid();
    return db(table).insert(obj, ["*"]);
  });
};
// UserComments.create({
//   user_id: "ff055dfe-c040-4545-a4b3-06669b46af40",
//   comment_id: "875086e1-b43b-4ff7-bd3d-1b23bd5c3b3f"
// }).then(data => console.log(data));

UserComments.update = function(obj) {
  return P.try(() => {
    const { user_comments_id } = obj;
    delete obj["user_comments_id"];
    if (!user_comments_id) return false;
    obj.last_edit_date = new Date();

    return db(table)
      .where({ user_comments_id: user_comments_id, deleted: false })
      .update(obj, ["*"]);
  });
};
// UserComments.update({
//   user_comments_id: "1236d82e-637e-4f1f-b441-3af083c4e5de",
//   comment_id: "875086e1-b43b-4ff7-bd3d-1b23bd5c3b3f"
// }).then(data => console.log(data));

UserComments.get = function(obj) {
  return P.try(() => {
    obj.deleted = false;
    return db(table)
      .where(obj)
      .select("*");
  });
};
// UserComments.get({
//   comment_id: "875086e1-b43b-4ff7-bd3d-1b23bd5c3b3f"
// }).then(data => console.log(data));

UserComments.delete = function(obj) {
  return P.try(() => {
    const { user_comments_id } = obj;
    delete obj["user_comments_id"];
    if (!user_comments_id) return false;
    return db(table)
      .where({ user_comments_id: user_comments_id })
      .delete();
  });
};

// UserComments.delete({
//   user_comments_id: "1236d82e-637e-4f1f-b441-3af083c4e5de"
// }).then(data => console.log(data));

module.exports = UserComments;
