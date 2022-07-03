// skema orm course_plan_lectures
const db = require("../config/conn");
const { Sequelize, DataTypes } = require("sequelize");
const lecturers = require("./lecturers");
const course_plans = require("./course_plans");

const course_plan_lecturers = db.define(
  "course_plan_lecturers",
  {
    id: {
      type: Sequelize.INTEGER,
      // autoIncrement: true,
      primaryKey: true,
    },

    course_plan_id: {
      type: Sequelize.INTEGER,
      foreignKey: true,
    },

    lecturer_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      foreignKey: true,
    },

    creator: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },

    created_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },

    update_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  },

  {
    tableName: "course_plan_lecturers",
    timestamps: false,
  }
);

module.exports = course_plan_lecturers;
