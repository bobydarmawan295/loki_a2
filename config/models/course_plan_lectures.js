<<<<<<< HEAD
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mysql://root@localhost/loki");

module.exports = (sequelize, DataTypes) => {
  const cpl = sequelize.define(
    "cpl",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      course_plan_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        foreignKey: true,
      },

      lecturer_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        foreignKey: true,
      },

      creator: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      update_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },

    {
      tableName: "course_plan_lecturers",
      timestamps: true,
    }
  );
  return cpl;
};
=======
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
>>>>>>> 6120a048f6448268bdb0c5765b9eca5783696d97
