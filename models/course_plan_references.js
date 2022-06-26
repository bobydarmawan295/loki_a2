const db = require("../config/conn");
const { Sequelize, DataTypes } = require("sequelize");
const course_plan_details = require("./course_plan_details");
const course_plan_detail_refs = require("./course_plan_detail_refs");
const course_plans = require("./course_plans");

const course_plan_references = db.define(
  "course_plan_references",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    course_plan_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: course_plans,
        key: "id",
      },
    },

    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    author: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    publisher: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    year: {
      type: Sequelize.DATE,
      allowNull: false,
    },

    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    created_at: {
      type: Sequelize.DATE,
    },

    update_at: {
      type: Sequelize.DATE,
    },
  },

  {
    tableName: "course_plan_references",
    timestamps: false,
  }
);

course_plan_references.belongsToMany(course_plan_details, { through: course_plan_detail_refs, foreignKey: "course_plan_reference_id" });
course_plan_details.belongsToMany(course_plan_references, { through: course_plan_detail_refs, foreignKey: "course_plan_detail_id" });

module.exports = course_plan_references;
