const db = require("../config/conn");
const { Sequelize, DataTypes } = require('sequelize');

const courses = require("./courses");

const course_requirements = db.define(
  "course_requirements",
  {
    id:
    {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    course_id:
    {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: courses,
        key: 'id'
      }
    },

    required_course_id:
    {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: courses,
        key: 'id'
      }
    },

    required_level:
    {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    created_at:
    {
      type: DataTypes.DATE,
    },

    updated_at:
    {
      type: DataTypes.DATE,
    },

  },

  {
    tableName: "course_requirements",
    timestamps: false, //Karena created_at dan update_at akan dibuat otomatis oleh sequelize
    // freezeTableName: true
  }
);

module.exports = course_requirements;
