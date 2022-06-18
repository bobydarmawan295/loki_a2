const course_plans = require("../models/course_plans");
const courses = require("../models/courses");
const lecturers = require("../models/lecturers");
// const curricula = require("../models/curricula");

const getCourses = async (req, res) => {
  try {
    await course_plans
      .findAll({
        attributes: ["id", "name", "code"],
        include: [
          {
            model: courses,
            attributes: ["name", "semester", "curriculum_id"],
            required: true,
          },
          {
            model: lecturers,
            attributes: ["id"],
            through: {
              attributes: ["updated_at", "created_at"],
            },
            required: true,
          },
        ],
        where: {
          id: req.params.id,
        },
      })
      .then((result) => {
        if (result.length > 0) {
          res.render("dosen/course_plan", { items: result });
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

module.exports = { getCourses };
