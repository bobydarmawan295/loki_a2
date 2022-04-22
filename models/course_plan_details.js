// skema orm course_plan_details
const Sequelize = require('sequelize');
const db= require('../database/conn');

const cpDetail = db.define("cpDetail",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      course_plan_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        foreignKey: true
      },

      week: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      material: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      method: {
        type: Sequelize.STRING,
        allowNull: false,
      },
  
      student_experience: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      update_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },

    {
      tableName: "course_plan_lecturers",
      timestamps: false,
    }
);
module.exports = cpDetail;
