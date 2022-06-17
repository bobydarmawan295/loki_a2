const db = require("../config/conn");
const { Sequelize, DataTypes } = require('sequelize');
const courses = require("./courses");

const curricula = db.define('curricula', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    active: {
        type: Sequelize.STRING,
        allowNull: false
    },
    year_start: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    year_end: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description: {
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

    tableName: 'curricula',
    timestamps: false  //Karena created_at dan update_at akan dibuat otomatis oleh sequelize
    // freezeTableName: true
    
});

module.exports = curricula;

