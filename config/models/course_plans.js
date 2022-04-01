// skema orm course_plans
const Sequelize = require('sequelize');
const db= require('../database/conn');

const cp = db.define(
    "course_plan",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      course_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        foreignKey: true,
      },

      rev: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      code: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      alias_name: {
        type: Sequelize.STRING,
      },

      credit: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      semester: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      description: {
        type: Sequelize.STRING,
      },

      material: {
        type: Sequelize.STRING,
      },

      created_by: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        foreignKey: true,
      },

      validated_by: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        foreignKey: true,
      },

      validated_at: {
        type: Sequelize.DATE,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      update_at: {
        type: Sequelize.DATE,
      },
    },

    {
      tableName: "course_plan",
      timestamps: false,
    }
  );
module.exports = cp;
