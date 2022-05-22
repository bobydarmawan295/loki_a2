const CPR = require("../models/course_plan_references.js");
const controller = {};

controller.getCPRById = async (req, res) => {
  try {
    const cpr = await CPR.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(cpr[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};
controller.createCPR = async (req, res) => {
  try {
    await CPR.create(req.body);
    res.json({
      message: "Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
controller.updateCPR = async (req, res) => {
  try {
    await CPR.update(req.body, {
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

controller.deleteCPR = async (req, res) => {
  try {
    await CPR.destroy({
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
