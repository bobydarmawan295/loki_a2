const { Sequelize, DataTypes } = require("sequelize");

const db = require("../config/conn");

const course_lo_details = db.define(
  "course_lo_details",
  {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },

    curriculum_lo_id: {
      type: Sequelize.BIGINT,
      foreignKey: true,
    },

    course_lo_id: {
      type: Sequelize.BIGINT,
      foreignKey: true,
    },

    created_at: {
      type: Sequelize.DATE,
    },

    updated_at: {
      type: Sequelize.DATE,
    },
  },

  {
    tableName: "course_lo_details",
    timestamps: false,
    underscored: true,
  }
);

module.exports = course_lo_details;
