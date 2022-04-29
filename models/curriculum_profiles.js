// const { Sequelize, DataTypes } = require('sequelize');

const Sequelize = require("sequelize");
const db = require("../database/conn");

const curriculum_profiles = db.define(
  "curriculum_profiles",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    curriculum_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    code: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    profile: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
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
    tableName: "curriculum_profiles",
    timestamps: false, //Karena created_at dan update_at akan dibuat otomatis oleh sequelize
    // freezeTableName: true
  }
);
module.exports = curriculum_profiles;
