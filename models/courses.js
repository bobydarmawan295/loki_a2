const db = require("../config/conn");
const { Sequelize, DataTypes } = require('sequelize');

const curricula = require("./curricula");

const courses = db.define(
  "courses",
  {
    id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        primaryKey : true,
        autoIncrement: true
    },

    curriculum_id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        // references: {
        //     model: curricula,
        //     key: 'id'
        // }
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

    alias_name:
    {
        type : DataTypes.TEXT
    },

    credit:
    {
        type : DataTypes.INTEGER,
        allowNull : false
    },

    semester:
    {
        type : DataTypes.INTEGER,
        allowNull : false
    },

    description:
    {
        type : DataTypes.TEXT
    },

    created_at:
    {
        type : DataTypes.DATE,
    },

    updated_at:
    {
        type : DataTypes.DATE,
    }
  },

  {

    tableName: "courses",
    timestamps: false, //Karena created_at dan update_at akan dibuat otomatis oleh sequelize
    // freezeTableName: true
  }
);

courses.hasOne(curricula);
courses.belongsTo(curricula, { foreignKey:'curriculum_id'});



module.exports = courses;
