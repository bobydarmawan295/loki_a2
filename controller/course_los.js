const CLos = require("../models/course_los.js");
const controller = {};

controller.getCoursesLosById = async (req, res) => {
  try {
    const cLos = await CLos.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(cLos[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};
controller.createCourseLos = async (req, res) => {
  try {
    await CLos.create(req.body);
    res.json({
      message: "Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
controller.updateCourseLos = async (req, res) => {
  try {
    await CLos.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

controller.deleteCourseLos = async (req, res) => {
  try {
    await CLos.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
module.exports = controller;
