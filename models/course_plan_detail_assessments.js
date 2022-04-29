const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root@localhost:3306/loki");

const detail_assessment = sequelize.define(
  "course_plan_detail_assessments",
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

    course_plan_assessment_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      foreignKey: true,
    },

    percentage: {
      type: Sequelize.DOUBLE,
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
    tableName: "course_plan_detail_assessments",
    timestamps: true,
  }
);

module.exports = detail_assessment;
