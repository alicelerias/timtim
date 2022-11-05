const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  APP_ENVIRONMENT: process.env.APP_ENVIRONMENT,
  APP_PORT: Number(process.env.APP_PORT),
  DB_CONNECTION: process.env.DB_CONNECTION
};
