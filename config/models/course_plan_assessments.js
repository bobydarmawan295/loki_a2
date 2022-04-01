<<<<<<< HEAD
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize ("mysql://root@localhost:8080/loki");


const assessment = sequelize.define('course_plan_references', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    course_plan_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        foreignKey: true
    },

    tittle: {
        type: DataTypes.STRING,
        allowNull: false
    },

    author: {
        type: DataTypes.STRING,
        allowNull: false
    },

    publisher: {
        type: DataTypes.STRING,
        allowNull: false
    },

    year: {
        type: DataTypes.DATE,
        allowNull: false
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false
    },

    created_at: {
        type: DataTypes.DATE,
        allowNull: false
    },

    update_at: {
        type: DataTypes.DATE,
        allowNull: false
    }
 }, 
 
    {
    tableName: 'course_plan_references',
    timestamps: true 
    
})
=======
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
>>>>>>> 6120a048f6448268bdb0c5765b9eca5783696d97
