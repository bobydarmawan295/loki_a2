const { Sequelize } = require('sequelize');
const Se = require('sequelize');
const sequelize = new Sequelize ("mysql://root@localhost:3306/loki")

const course_los = sequelize.define('course_los', {
    id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    course_plan_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        foreignKey: true,
    },

    type: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

    code: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    parent_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

    created_at: {
        type: Sequelize.DATE,
    },

    update_at: {
        type: Sequelize.DATE,
    }
}, {
    tableName: 'course_los',
    timestamps: true  
});

module.exports = course_los;