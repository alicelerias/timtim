const knex = require("../connection");

const list = () => {
  return knex("epics");
};

module.exports = {
  list
};
