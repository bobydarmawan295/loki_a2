//skema orm course_plan_assessments.js
const Sequelize = require('sequelize');
const db = require ("../database/conn");


const cpAssess = db.define( "cpAssess", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    course_plan_id: { //masih ragu karena FK
        type: Sequelize.INTEGER,
        autoIncrement: true,
        foreignKey: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    percentage: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },

    flag: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    created_at: {
        type: Sequelize.DATE,
        allowNull: false
    },

    update_at: {
        type: Sequelize.DATE,
        allowNull: false
    }
 }, 
 
    {
    tableName: 'course_plan_assessments',
    timestamps: false 
    }
    
 );

module.exports = cpAssess;
