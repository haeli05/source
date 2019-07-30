"use strict";

let db = require("../db/knex");
let uuid = require("uuid/v4");
let P = require("bluebird");
let Columns = {};

const table = "columns";

Columns.create = function(obj) {
  return P.try(() => {
    return db(table).insert({ column_id: uuid(), ...obj }, ["*"]);
  });
};

Columns.update = function(obj) {
  return P.try(() => {
    const { column_id } = obj;
    delete obj["column_id"];
    if (!column_id) return false;
    obj.delete();
    return db(table)
      .where({ column_id: column_id })
      .update({ ...obj }, ["*"]);
  });
};

Columns.get = function(obj) {
  return P.try(() => {
    return db(table)
      .where({ ...obj })
      .select("*");
  });
};

Columns.delete = function(obj) {
  return P.try(() => {
    const { column_id } = obj;
    delete obj["column_id"];
    if (!column_id) return false;
    return db(table)
      .where({ column_id: column_id })
      .delete();
  });
};

module.exports = Columns;
