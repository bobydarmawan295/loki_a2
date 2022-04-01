<<<<<<< HEAD
// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize ("mysql://root@localhost:8080/loki");
const { Sequelize, DataTypes } = require('sequelize');
const db= require('../database/conn');


const referensi = db.define('course_plan_references', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    course_plan_id: {
        type: DataTypes.INTEGER,
        // autoIncrement: true,
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
    timestamps: false 
    
})
=======
//skema orm course_plan_references.js

// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize ("mysql://root@localhost:8080/loki");
const Sequelize = require('sequelize');
const db = require('../database/conn');


const cpReferensi = db.define(cpReferensi, {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    course_plan_id: {  //masih ragu karena FK
        type: Sequelize.INTEGER,
        autoIncrement: true,
        foreignKey: true
    },

    tittle: {
        type: Sequelize.STRING,
        allowNull: false
    },

    author: {
        type: Sequelize.STRING,
        allowNull: false
    },

    publisher: {
        type: Sequelize.STRING,
        allowNull: false
    },

    year: {
        type: Sequelize.DATE,
        allowNull: false
    },

    description: {
        type: Sequelize.STRING,
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
    timestamps: false 
    
});

module.exports = cpReferensi;
>>>>>>> 6120a048f6448268bdb0c5765b9eca5783696d97
