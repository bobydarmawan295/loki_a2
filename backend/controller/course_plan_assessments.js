const CPA = require("../models/course_plan_assessments.js");
const controller = {};

controller.getCPAById = async (req, res) => {
  try {
    const cpa = await CPA.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(cpa[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};
controller.createCPA = async (req, res) => {
  try {
    await CPA.create(req.body);
    res.json({
      message: "Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
controller.updateCPA = async (req, res) => {
  try {
    await CPA.update(req.body, {
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

controller.deleteCPA = async (req, res) => {
  try {
    await CPA.destroy({
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
