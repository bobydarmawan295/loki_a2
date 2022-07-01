const course_los = require("../models/course_los");
const { Op, where } = require("sequelize");
const course_plans = require("../models/course_plans");

const getCourseLos = async (req, res) => {
  try {
    await course_plans
      .findAll({
        attributes: ["id", "rev", "course_id", "name", "semester"],
        include: [
          {
            model: course_los,
            attributes: ["id", "course_plan_id", "code", "name"],
          },
        ],
        where: {
          rev: req.params.rev,
          id: req.params.id,
        },
      })
      .then((result) => {
        if (result.length > 0) {
          res.render("dosen/cpmk", { items: result });
        } else {
          res.render("dosen/add_cpmk", { items: result });
          // res.status(200).json({
          //   message: "data tidak ada",
          //   data: [],
          // });
        }
      });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

const getCourseLosById = async (req, res) => {
  try {
    await course_los
      .findOne({
        attributes: ["id", "code", "name", "parent_id"],
        where: {
          id: req.params.id,
        },
      })
      .then((result) => {
        if (result) {
          res.render("dosen/edit_cpmk", { items: result });
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
const createCourseLos = async (req, res) => {
  try {
    const course_plan_id = req.params.id;
    const rev = req.params.id;
    const { code, name, parent_id } = req.body;
    await course_los.create({
      course_plan_id: course_plan_id,
      type: 1,
      code: code,
      name: name,
      parent_id: parent_id,
    });
    //   res.redirect("/dosen/courses");
  } catch (error) {
    res.json({ message: error.message });
    // res.redirect("/dosen/add-course");
  }
};

const updateCourseLos = async (req, res) => {
  try {
    const { code, name, parent_id } = req.body;
    await course_los.update(
      {
        type: 1,
        code: code,
        name: name,
        parent_id: parent_id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
  } catch (error) {
    res.json({ message: error.message });
    // res.redirect("/dosen/add-course");
  }
};

const deleteCourseLos = async (req, res) => {
  try {
    await course_los.destroy({
      where: {
        id: req.params.id,
      },
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = { getCourseLos, createCourseLos, updateCourseLos, deleteCourseLos, getCourseLosById };
