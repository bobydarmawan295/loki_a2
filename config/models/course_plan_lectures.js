const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mysql://root@localhost/loki");

module.exports = (sequelize, DataTypes) => {
  const cpl = sequelize.define(
    "cpl",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      course_plan_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        foreignKey: true,
      },

      lecturer_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        foreignKey: true,
      },

      creator: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      update_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },

    {
      tableName: "course_plan_lecturers",
      timestamps: true,
    }
  );
  return cpl;
};
