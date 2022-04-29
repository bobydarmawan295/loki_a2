// skema orm course_plan_detail_refs
const Sequelize = require("sequelize");
const db = require("../database/conn");

const cpDetailRef = db.define(
  "cpDetailRef",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    course_plan_detail_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      foreignKey: true,
    },

    course_plan_reference_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      foreignKey: true,
    },

    category: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },

    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },

    update_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },

  {
    tableName: "course_plan_detail_refs",
    timestamps: false,
  }
);
module.exports = cpDetailRef;
