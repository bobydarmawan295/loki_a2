const db = require("../config/conn");
const { Sequelize, DataTypes } = require("sequelize");

const courses = require("./courses");
const lecturers = require("./lecturers");
const course_plan_lecturers = require("./course_plan_lecturers");
const course_los = require("./course_los");
const course_plan_references = require("./course_plan_references");
const course_plan_details = require("./course_plan_details");
const course_plan_assessments = require("./course_plan_assessments");

const course_plans = db.define(
  "course_plans",
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    course_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },

    rev: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    alias_name: {
      type: DataTypes.TEXT,
    },

    credit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    semester: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
    },

    material: {
      type: DataTypes.TEXT,
    },

    created_by: {
      type: DataTypes.BIGINT,
    },

    validated_by: {
      type: DataTypes.BIGINT,
    },

    validated_at: {
      type: DataTypes.BIGINT,
    },

    created_at: {
      type: DataTypes.DATE,
    },

    updated_at: {
      type: DataTypes.DATE,
    },
  },

  {
    tableName: "course_plans",
    timestamps: false,
  }
);

course_plans.hasOne(courses);
course_plans.belongsTo(courses, { foreignKey: "course_id" });

course_plans.belongsToMany(lecturers, { through: course_plan_lecturers, foreignKey: "course_plan_id" });
lecturers.belongsToMany(course_plans, { through: course_plan_lecturers, foreignKey: "lecturer_id" });

lecturers.hasMany(course_plan_lecturers);
course_plan_lecturers.belongsTo(lecturers, { foreignKey: "lecturer_id" });

course_plans.hasMany(course_plan_lecturers);
course_plan_lecturers.belongsTo(course_plans, { foreignKey: "course_plan_id" });

course_plans.hasMany(course_los);
course_los.belongsTo(course_plans, { foreignKey: "coursePlanId" });

course_plans.hasMany(course_plan_references, { foreignKey: "course_plan_id" });

course_plans.hasMany(course_plan_details, { foreignKey: "course_plan_id" });

course_plans.hasMany(course_plan_assessments, { foreignKey: "course_plan_id" });

course_plans.hasMany(course_plan_assessments, { foreignKey: "course_plan_id" });

course_plans.hasMany(course_plan_lecturers, { foreignKey: "course_plan_id" });

course_plans.hasMany(course_los, { foreignKey: "course_plan_id" });
course_los.belongsTo(course_plans);

module.exports = course_plans;
