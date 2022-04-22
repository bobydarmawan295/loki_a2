// skema orm lecturers
const Sequelize = require("sequelize");
const config = require("../config/database/conn");

const users = config.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email_verified_at: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    remember_token: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.ENUM,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
    },
    updated_at: {
      type: Sequelize.DATE,
    },
  },

  {
    tableName: "users",
    timestamps: false, //Karena created_at dan update_at akan dibuat otomatis oleh sequelize
    // freezeTableName: true
  }
);

module.exports = users;
