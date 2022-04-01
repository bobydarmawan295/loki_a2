// skema orm course_plan_lectures
const Sequelize = require('sequelize');
const db= require('../database/conn');

const cpl = db.define(
    "cpl",
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
        allowNull: false,
      },

      update_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },

    {
      tableName: "course_plan_lecturers",
      timestamps: false,
    }
);
module.exports = cpl;
