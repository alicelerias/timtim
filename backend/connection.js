const knex = require('knex')
const dbConfig = require('./knexfile')
const config = require('./config')

module.exports = knex(dbConfig[config.APP_ENVIRONMENT])