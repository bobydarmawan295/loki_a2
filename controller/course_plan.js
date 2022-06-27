const course_plans = require("../models/course_plans");
const courses = require("../models/courses");
const lecturers = require("../models/lecturers");
const course_plan_assessments = require("../models/course_plan_assessments");
const course_plan_details = require("../models/course_plan_details");
const course_los = require("../models/course_los");
const course_plan_references = require("../models/course_plan_references");
const course_plan_lecturers = require("../models/course_plan_lecturers");

// const curricula = require("../models/curricula");

const getCourses = async (req, res) => {
  try {
    await course_plans
      .findAll({
        attributes: ["id", "name", "code", "semester", "credit", "material", "description"],
        include: [
          {
            model: course_los,
            as: "course_los",
            attributes: ["id", "course_plan_id", "code", "name"],
            required: true,
          },
          {
            model: course_plan_details,
            attributes: ["id", "course_plan_id", "week", "material", "method", "student_experience"],
            required: true,
          },
          {
            model: course_plan_references,
            attributes: ["id", "course_plan_id", "title", "author", "publisher", "year", "description"],
            required: true,
          },
          {
            model: course_plan_details,
            attributes: ["id", "course_plan_id", "week", "material", "method", "student_experience"],
            required: true,
          },
          {
            model: course_plan_references,
            attributes: ["id", "course_plan_id", "title", "author", "publisher", "year", "description"],
            required: true,
          },
          {
            model: course_plan_assessments,
            attributes: ["id", "course_plan_id", "name", "percentage"],
            required: true,
          },
        ],
        where: {
          id: req.params.id,
        },
      })
      .then((result) => {
        if (result.length > 0) {
          res.render("dosen/course_plan", { item: result });
        } else {
          res.status(200).json({
            message: "data tidak ada",
            data: [],
          });
        }
      });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

const getRev = async (req, res) => {
  try {
    await course_plans
      .findAll({
        attributes: ["id", "rev", [Sequelize.fn("DISTINCT", Sequelize.col("course_id")), "course_id"], "code", "name", "credit", [Sequelize.fn("COUNT", Sequelize.col("course_id")), "total"]],
      })
      .then((result) => {
        if (result.length > 0) {
          res.render("admin/home", { items: result });
        } else {
          res.status(200).json({
            message: "data tidak ada",
            data: [],
          });
        }
      });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

module.exports = { getCourses, getRev };
