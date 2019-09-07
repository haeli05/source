"use strict";

let { db } = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let UserFollowers = {};

const table = "user_followers";

UserFollowers.create = function(obj) {
  return P.try(() => {
    obj.user_followers_id = uuid();
    return db(table).insert(obj, ["*"]);
  });
};
// UserFollowers.create({
//   user_id: "f7839cb9-f287-4e80-9f79-9834949157b4",
//   user_follower: "ff055dfe-c040-4545-a4b3-06669b46af40"
// }).then(data => console.log(data));

UserFollowers.update = function(obj) {
  return P.try(() => {
    const { user_followers_id } = obj;
    delete obj["user_followers_id"];
    if (!user_followers_id) return false;
    obj.last_edit_date = new Date();

    return db(table)
      .where({ user_followers_id: user_followers_id, deleted: false })
      .update(obj, ["*"]);
  });
};
// UserFollowers.update({
//   user_followers_id: "4c0a1dd0-4e9c-43ce-b868-2b186e437782",
//   user_follower: "f7839cb9-f287-4e80-9f79-9834949157b4"
// }).then(data => console.log(data));

UserFollowers.get = function(obj) {
  return P.try(() => {
    obj.deleted = false;
    return db(table)
      .where(obj)
      .select("*");
  });
};
// UserFollowers.get({
//   user_follower: "f7839cb9-f287-4e80-9f79-9834949157b4"
// }).then(data => console.log(data));

UserFollowers.delete = function(obj) {
  return P.try(() => {
    const { user_followers_id } = obj;
    delete obj["user_followers_id"];
    if (!user_followers_id) return false;
    return db(table)
      .where({ user_followers_id: user_followers_id })
      .delete();
  });
};
// UserFollowers.delete({
//   user_followers_id: "4c0a1dd0-4e9c-43ce-b868-2b186e437782"
// }).then(data => console.log(data));

module.exports = UserFollowers;
