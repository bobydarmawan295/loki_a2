const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize ("mysql://root@localhost:8080/loki");


const assessment = sequelize.define('course_plan_assessments', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    course_plan_id: { //masih ragu karena FK
        type: DataTypes.INTEGER,
        autoIncrement: true,
        foreignKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    percentage: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },

    flag: {
        type: DataTypes.INTEGER,
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
    tableName: 'course_plan_assessments',
    timestamps: true 
    
})