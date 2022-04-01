// const { Sequelize, DataTypes } = require('sequelize');

const Sequelize = require('sequelize');
const db= require('../database/conn');

const courses = db.define('courses', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    curriculum_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    code: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    alias_name: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    credit: {
        type: Sequelize.STRING,
        allowNull: false
    },
    semester: {
        type: Sequelize.STRING,
        allowNull: false
    },
    semester: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    created_at: {
        type: Sequelize.DATE,
    },
    updated_at: {
        type: Sequelize.DATE,
    }
},

{  

    tableName: 'courses',
    timestamps: false  //Karena created_at dan update_at akan dibuat otomatis oleh sequelize
    // freezeTableName: true
    
});

module.exports = courses;