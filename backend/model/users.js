const knex = require("../connection");

const list = () => {
  return knex("users");
};

module.exports = {
  list
};
