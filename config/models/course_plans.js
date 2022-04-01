<<<<<<< HEAD
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mysql://root@localhost:8080/loki");

module.exports = (sequelize, DataTypes) => {
  const cp = sequelize.define(
    "course_plan",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      course_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        foreignKey: true,
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
        type: DataTypes.STRING,
        allowNull: false,
      },

      alias_name: {
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
      },

      material: {
        type: DataTypes.STRING,
      },

      created_by: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        foreignKey: true,
      },

      validated_by: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        foreignKey: true,
      },

      validated_at: {
        type: DataTypes.DATE,
      },
      created_at: {
        type: DataTypes.DATE,
      },
      update_at: {
        type: DataTypes.DATE,
      },
    },

    {
      tableName: "course_plan",
      timestamps: true,
    }
  );
  return cp;
};
=======
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
>>>>>>> 6120a048f6448268bdb0c5765b9eca5783696d97
