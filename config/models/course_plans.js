const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mysql://root@localhost:8080/loki");

module.exports = (sequelize, DataTypes) => {
  const cp = sequelize.define(
    "course_plan",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      course_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        foreignKey: true,
      },

      rev: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      alias_name: {
        type: DataTypes.STRING,
      },

      credit: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      semester: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      description: {
        type: DataTypes.STRING,
      },

      material: {
        type: DataTypes.STRING,
      },

      created_by: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        foreignKey: true,
      },

      validated_by: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        foreignKey: true,
      },

      validated_at: {
        type: DataTypes.DATE,
      },
      created_at: {
        type: DataTypes.DATE,
      },
      update_at: {
        type: DataTypes.DATE,
      },
    },

    {
      tableName: "course_plan",
      timestamps: true,
    }
  );
  return cp;
};
