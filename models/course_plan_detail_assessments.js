const db = require("../config/conn");
const { Sequelize, DataTypes } = require("sequelize");

const course_plan_details = require("./course_plan_details");
const course_plan_assessments = require("./course_plan_assessments");

const detail_assessment = db.define(
  "course_plan_detail_assessments",
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
        model: course_plan_details,
        key: "id",
      },
    },

    course_plan_assessment_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: course_plan_assessments,
        key: "id",
      },
    },

    percentage: {
      type: DataTypes.DOUBLE,
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
    tableName: "course_plan_detail_assessments",
    timestamps: true,
  }
);

module.exports = detail_assessment;
