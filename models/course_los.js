const { Sequelize, DataTypes } = require('sequelize');

const db = require("../config/conn");


const course_plans = require("./course_plans");

const course_los = db.define('course_los', {
    id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        primaryKey : true,
        autoIncrement: true
    },

    course_plan_id:
    {
        type: DataTypes.BIGINT,
        allowNull : false,
        references: {
          model: course_plans,
          key: 'id'
        }
    },
    
    type:
    {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    code:
    {
        type : DataTypes.STRING,
        allowNull: false
    }, 

    name:
    {
        type : DataTypes.TEXT,
        allowNull: false 
    },

    parent_id:
    {
        type: DataTypes.BIGINT,
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

}, {
    tableName: 'course_los',
    timestamps: false 
});

module.exports = course_los;