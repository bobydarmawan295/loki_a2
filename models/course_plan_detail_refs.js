// skema orm course_plan_detail_refs
const db = require("../config/conn");
const { Sequelize, DataTypes } = require("sequelize");

const course_plans_details = require("./course_plan_details");
const course_plan_references = require("./course_plan_references");

const course_plan_detail_refs = db.define(
  "course_plan_detail_refs",
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

    course_plan_reference_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: course_plan_references,
        key: "id",
      },
    },

    category: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    created_at: {
      type: DataTypes.DATE,
    },

    updated_at: {
      type: DataTypes.DATE,
    },
  },

  {
    tableName: "course_plan_detail_refs",
    timestamps: false,
  }
);
module.exports = course_plan_detail_refs;
