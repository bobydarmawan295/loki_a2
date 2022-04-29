//skema orm course_plan_references.js

// const { Sequelize, Sequelize } = require('sequelize');
// const sequelize = new Sequelize ("mysql://root@localhost:8080/loki");
const Sequelize = require("sequelize");
const db = require("../database/conn");

const cpReferensi = db.define(
  "cpReferensi",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    course_plan_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      foreignKey: true,
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
      allowNull: false,
    },

    update_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },

  {
    tableName: "course_plan_references",
    timestamps: false,
  }
);

module.exports = cpReferensi;
