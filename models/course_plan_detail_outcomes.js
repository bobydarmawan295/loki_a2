const Sequelize = require("sequelize");
const db = require("../database/conn");

const course_plan_detail_outcomes = db.define(
  "course_plan_detail_outcomes",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    course_plan_detail_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    course_lo_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
    },
    updated_at: {
      type: Sequelize.DATE,
    },
  },

  {
    tableName: "course_plan_detail_outcomes",
    timestamps: false, //Karena created_at dan update_at akan dibuat otomatis oleh sequelize
    // freezeTableName: true
  }
);

module.exports = course_plan_detail_outcomes;
