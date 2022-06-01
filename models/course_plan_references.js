const db = require("../config/conn");
const { Sequelize, DataTypes } = require('sequelize');

const course_plan_references = db.define(
  "course_plan_references",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    course_plan_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      foreignKey: true,
    },

    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    author: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    publisher: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    year: {
      type: Sequelize.DATE,
      allowNull: false,
    },

    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },

    update_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },

  {
    tableName: "course_plan_references",
    timestamps: false,
  }
);

module.exports = course_plan_references;
