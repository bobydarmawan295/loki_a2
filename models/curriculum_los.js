const db = require("../config/conn");
const { Sequelize, DataTypes } = require("sequelize");

const curricula = require("./curricula");

const course_los = require("./course_los");
const course_lo_details = require("./course_lo_details");

const curriculum_los = db.define(
  "curriculum_los",
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    curriculum_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: curricula,
        key: "id",
      },
    },

    code: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
    },

    created_at: {
      type: DataTypes.DATE,
    },

    update_at: {
      type: DataTypes.DATE,
    },
  },

  {
    tableName: "curriculum_los",
    timestamps: false,
    underscored: true,
  }
);
curriculum_los.belongsToMany(course_los, { through: course_lo_details, foreignKey: "curriculum_lo_id" });
course_los.belongsToMany(curriculum_los, { through: course_lo_details, foreignKey: "course_lo_id" });
course_lo_details.belongsTo(curriculum_los, { foreignKey: "curriculum_lo_id" });
course_lo_details.belongsTo(course_los, { foreignKey: "course_lo_id" });
curriculum_los.hasMany(course_lo_details);
course_los.hasMany(course_lo_details);

curricula.hasMany(curriculum_los, { foreignKey: "curriculum_id" });
curriculum_los.belongsTo(curricula);

module.exports = curriculum_los;
