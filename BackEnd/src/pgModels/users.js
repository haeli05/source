"use strict";

let { db } = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let Users = {};

const table = "users";

Users.create = function(obj) {
  return P.try(() => {
    obj.user_id = uuid();
    return db(table).insert(obj, ["*"]);
  });
};

// Users.create({
//   settings: { a: 1, b: 3, c: 4 },
//   full_name: "Harish ",
//   username: "harishydv",
//   bio: "This is the bio I am working with",
//   email: "harishyd@protonmail.com",
//   password: uuid(),
//   location: "India",
//   website: "harish.com",
//   skills: ["javascript", "react", "html"],
//   social_links: ["facebook.com", "twitter.com"],
//   wallet_links: ["stripe.com", "paypal.com", "transferwise"],
//   avatar: "https://s3.aws.lalala/adafafafda",
//   tags_following: ["yolo, yola", "tota"]
// }).then(data => console.log(data));

Users.update = function(obj) {
  return P.try(() => {
    const { user_id } = obj;
    delete obj["user_id"];
    if (!user_id) return false;
    return db(table)
      .where({ user_id: user_id })
      .update(obj, ["*"]);
  });
};

// Users.update({
//   user_id: "fa02c729-0090-4231-8536-fc60af7171e8",
//   full_name: "Harish"
// }).then(data => console.log(data));

Users.get = function(obj) {
  return P.try(() => {
    obj.deleted = false;
    return db(table)
      .where(obj)
      .select("*");
  });
};

// Users.get({ full_name: "Harish" }).then(data => console.log(data));

Users.getAll = function() {
  return P.try(() => {
    return db(table).select("*");
  });
};

// Users.getAll().then(data => console.log(data));

Users.delete = function(obj) {
  return P.try(() => {
    const { user_id } = obj;
    delete obj["user_id"];
    if (!user_id) return false;
    return db(table)
      .where(obj)
      .delete();
  });
};

// Users.delete({ user_id: "25a10763-b7f3-47ed-a9c5-f34a27a4cce6" }).then(data =>
//   console.log(data)
// );

Users.authenticate = function(Username, password, callback) {
  Users.get({ username: Username })
    .then(function([user]) {
      console.log("in model user: ", user);
      if (!user) {
        const err = new Error("Username or Password mismatch");
        err.status = 401;
        return callback(err, null);
      }
      console.log("password, user.password: ", password, user.password);
      bcrypt.compare(password, user.password, function(err, result) {
        if (result === true) {
          return callback(null, user);
        } else {
          const err = new Error("Username or Password mismatch");
          return callback(err, null);
        }
      });
    })
    .catch(err => callback(err));
};

module.exports = Users;
