"use strict";

let { db } = require("../db/knex");
const knex = require("knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let Users = {};
const bcrypt = require("bcrypt");

const table = "users";

Users.create = async function(obj) {
  return P.try(async () => {
    obj.user_id = uuid();
    if (obj.password) {
      const hashedPassword = await bcrypt.hash(obj.password, 10);
      obj.password = hashedPassword;
    }
    return db(table)
      .insert(obj, ["*"])
      .then(x =>
        x.map(x => {
          if (x[0]) delete x[0].password;
          return x;
        })
      );
  });
};

// Users.create({
//   settings: { a: 1, b: 3, c: 4 },
//   full_name: "Harish ",
//   username: "harishydvassaasddaa",
//   bio: "This is the bio I am working with",
//   email: "harishyadaasssddaa@protonmail.com",
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
  return P.try(async () => {
    const { user_id } = obj;
    delete obj["user_id"];
    if (obj.password) {
      const hashedPassword = await bcrypt.hash(obj.password, 10);
      obj.password = hashedPassword;
    }
    obj.updated_at = new Date();
    return db(table)
      .where({ user_id: user_id })
      .update(obj, ["*"])
      .then(x =>
        x.map(x => {
          console.log("x: ", x);
          if (x) delete x.password;
          return x;
        })
      );
  });
};

// Users.update({
//   user_id: "3e187210-46eb-47dd-9451-2d7572e6148a",
//   password: "Harish"
// }).then(data => console.log(data));

Users.get = function(obj) {
  return P.try(() => {
    obj.deleted = false;
    return db(table)
      .where(obj)
      .select("*")
      .then(x => {
        if (x[0]) delete x[0].password;
        return x;
      });
  });
};

// Users.get({ user_id: "1ba03612-8043-4f13-841a-73803803f06c" }).then(data =>
//   console.log("ad", data)
// );

Users.getAll = function() {
  return P.try(() => {
    return db(table)
      .select("*")
      .then(x =>
        x.map(x => {
          if (x) delete x.password;
          return x;
        })
      );
  });
};

// Users.getAll().then(data => console.log(data));

Users.delete = function(obj) {
  return P.try(() => {
    const { user_id } = obj;
    if (!user_id) return false;
    return db(table)
      .where({ user_id })
      .delete();
  });
};

// Users.delete({ user_id: "22750b60-23f0-41cf-9466-f542f9ce1b20" }).then(data =>
//   console.log(data)
// );

Users.authenticate = function(Username, password, callback) {
  return db(table)
    .where({ username: Username, deleted: false })
    .select("*")
    .then(function([user]) {
      if (!user) {
        const err = new Error("Username or Password mismatch");
        err.status = 401;
        return callback(err, null);
      }
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

// Users.authenticate("harishydvassaasddaa", "Harish", (x, y) =>
//   console.log(x, y)
// );

module.exports = Users;
