const db = require("../config/conn");
const { Sequelize, DataTypes } = require("sequelize");

const course_plans_details = require("./course_plan_details");
const course_los = require("./course_los");

const course_plan_detail_outcomes = db.define(
  "course_plan_detail_outcomes",
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    course_plan_detail_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: course_plans_details,
        key: "id",
      },
    },

    course_lo_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: course_los,
        key: "id",
      },
    },

    created_at: {
      type: DataTypes.DATE,
    },

    updated_at: {
      type: DataTypes.DATE,
    },
  },

  {
    tableName: "course_plan_detail_outcomes",
    timestamps: false, //Karena created_at dan update_at akan dibuat otomatis oleh sequelize
    // freezeTableName: true
  }
);

module.exports = course_plan_detail_outcomes;
