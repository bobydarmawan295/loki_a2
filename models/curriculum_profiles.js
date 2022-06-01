const db = require("../config/conn");
const { Sequelize, DataTypes } = require('sequelize');


const curricula = require("./curricula");

const curriculum_profiles = db.define(
  "curriculum_profiles",
  {
    id:
    {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    curriculum_id:
    {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: curricula,
        key: 'id'
      }
    },

    code:
    {
      type: DataTypes.TEXT,
      allowNull: false
    },

    name:
    {
      type: DataTypes.TEXT,
      allowNull: false
    },

    type:
    {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    description:
    {
      type: DataTypes.TEXT,
    },

    created_at:
    {
      type: DataTypes.DATE,
    },

    update_at:
    {
      type: DataTypes.DATE,
    },
    
  },

  {
    tableName: "curriculum_profiles",
    timestamps: false, //Karena created_at dan update_at akan dibuat otomatis oleh sequelize
    // freezeTableName: true
  }
);
module.exports = curriculum_profiles;
