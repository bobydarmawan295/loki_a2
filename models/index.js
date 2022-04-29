// Menggabungkan semua file di models
const config = require("../config/database/conn");
const Sequelize = require("sequelize");

const db = {};
db.Sequelize = Sequelize;
db.lecturers = require("./lecturers");

module.exports = db;
