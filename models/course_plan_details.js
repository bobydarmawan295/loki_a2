// skema orm course_plan_detail_refs
const db = require("../config/conn");
const { Sequelize, DataTypes } = require('sequelize');

const course_plans = require("./course_plans");

const course_plan_details = db.define(
  "course_plan_details",
  {
    id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        primaryKey : true,
        autoIncrement: true
    },

    course_plan_id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: course_plans,
          key: 'id'
        }
    },

    week:
    {
        type : DataTypes.INTEGER,
        allowNull: false 
    }, 

    material:
    {
        type : DataTypes.TEXT,
        allowNull: false 
    },

    method:
    {
        type : DataTypes.TEXT,
        allowNull: false
    },

    student_experience:
    {
        type : DataTypes.TEXT,
        allowNull: false
    },

    created_at:
    {
        type : DataTypes.DATE,
    },

    updated_at:
    {
        type : DataTypes.DATE,

    }
  },

  {
    tableName: "course_plan_details",
    timestamps: false,
  }
);
module.exports = course_plan_details ;
