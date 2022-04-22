const Sequelize = require("sequelize");
const db = new Sequelize("loki", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
