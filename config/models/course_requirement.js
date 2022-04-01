// const { Sequelize, DataTypes } = require('sequelize');

const Sequelize = require('sequelize');
const db= require('../database/conn');

const course_requirements = db.define('course_requirements', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    course_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    required_course_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    required_level: {
        type: Sequelize.INTEGER,
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

    tableName: 'course_requirements',
    timestamps: false  //Karena created_at dan update_at akan dibuat otomatis oleh sequelize
    // freezeTableName: true
    
});

module.exports = course_requirements;