const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize ("mysql://root@localhost:3306/loki")

const detail_assessment = sequelize.define('course_plan_detail_assessment', {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    course_plan_detail_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        foreignKey: true,
    },

    course_plan_assessment_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        foreignKey: true,
    },

    percentage: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },

    created_at: {
        type: DataTypes.DATE,
    },

    update_at: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'course_plan_detail_assesment',
    timestamps: true  
});