"use strict";

let { db } = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let UserIdeas = {};

const table = "user_ideas";

UserIdeas.create = function(obj) {
  return P.try(() => {
    obj.user_ideas_id = uuid();
    return db(table).insert(obj, ["*"]);
  });
};
// UserIdeas.create({
//   user_id: "f7839cb9-f287-4e80-9f79-9834949157b4",
//   idea_id: "bfc12554-a05c-4ee2-b770-3196fe004ae9"
// }).then(data => console.log(data));

UserIdeas.update = function(obj) {
  return P.try(() => {
    const { user_ideas_id } = obj;
    delete obj["user_ideas_id"];
    if (!user_ideas_id) return false;

    return db(table)
      .where({ user_ideas_id: user_ideas_id, deleted: false })
      .update(obj, ["*"]);
  });
};
// UserIdeas.update({
//   user_ideas_id: "38f222c9-4dc3-4230-bff8-e36a52c60f17",
//   idea_id: "bfc12554-a05c-4ee2-b770-3196fe004ae9"
// }).then(data => console.log(data));

UserIdeas.get = function(obj) {
  return P.try(() => {
    obj.deleted = false;
    return db(table)
      .where(obj)
      .select("*");
  });
};
// UserIdeas.get({
//   idea_id: "bfc12554-a05c-4ee2-b770-3196fe004ae9"
// }).then(data => console.log(data));

UserIdeas.delete = function(obj) {
  return P.try(() => {
    const { user_ideas_id } = obj;
    delete obj["user_ideas_id"];
    if (!user_ideas_id) return false;
    return db(table)
      .where({ user_ideas_id: user_ideas_id })
      .delete();
  });
};
// UserIdeas.delete({
//   user_ideas_id: "38f222c9-4dc3-4230-bff8-e36a52c60f17"
// }).then(data => console.log(data));

module.exports = UserIdeas;
