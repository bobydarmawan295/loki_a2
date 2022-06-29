// skema orm course_plan_detail_refs
const db = require("../config/conn");
const { Sequelize, DataTypes } = require("sequelize");

const course_plans = require("./course_plans");
const course_plan_assessments = require("./course_plan_assessments");
const course_plan_detail_assessments = require("./course_plan_detail_assessments");

const course_plan_details = db.define(
  "course_plan_details",
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    course_plan_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: course_plans,
        key: "id",
      },
    },

    week: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    material: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    method: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    student_experience: {
      type: DataTypes.TEXT,
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
    tableName: "course_plan_details",
    timestamps: false,
  }
);

course_plan_details.belongsToMany(course_plan_assessments, { through: course_plan_detail_assessments, foreignKey: "course_plan_detail_id" });
course_plan_assessments.belongsToMany(course_plan_details, { through: course_plan_detail_assessments, foreignKey: "course_plan_assessment_id" });

module.exports = course_plan_details;
