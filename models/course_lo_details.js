const { Sequelize, DataTypes } = require('sequelize');

const db = require("../config/conn");

const curriculum_los = require("./curriculum_los");
const course_los = require("./course_los");


const course_lo_details = db.define(
  "course_lo_details",
  {
    id:
    {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    curriculum_lo_id:
    {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: curriculum_los,
        key: 'id'
      }
    },

    course_lo_id:
    {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: course_los,
        key: 'id'
      }
    },

    created_at:
    {
      type: DataTypes.DATE,
    },

    updated_at:
    {
      type: DataTypes.DATE,
    }
  },

  {
    tableName: "course_lo_details",
    timestamps: false, //Karena created_at dan update_at akan dibuat otomatis oleh sequelize
    // freezeTableName: true
  }
);

module.exports = course_lo_details;
