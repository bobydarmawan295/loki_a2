const { Sequelize, DataTypes } = require("sequelize");

const db = require("../config/conn");

const course_plan_detail_outcomes = require("./course_plan_detail_outcomes");
const course_plans = require("./course_plans");
const course_plan_details = require("./course_plan_details");

const course_los = db.define(
  "course_los",
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
    },
    type: {
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

    parent_id: {
      type: DataTypes.BIGINT,
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
    tableName: "course_los",
    timestamps: false,
    underscored: true,
  }
);

course_los.belongsToMany(course_plan_details, { through: course_plan_detail_outcomes, foreignKey: "course_lo_id" });
course_plan_details.belongsToMany(course_los, { through: course_plan_detail_outcomes, foreignKey: "course_plan_detail_id" });
course_los.hasMany(course_los, { foreignKey: "parent_id" });

module.exports = course_los;
