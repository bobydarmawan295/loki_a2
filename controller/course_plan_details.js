const CPD = require("../models/course_plan_details");
const controller = {};

controller.getCPDById = async (req, res) => {
  try {
    const cpd = await CPD.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(cpd[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};
controller.createCPD = async (req, res) => {
  try {
    await CPD.create(req.body);
    res.json({
      message: "Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
controller.updateCPD = async (req, res) => {
  try {
    await CPD.update(req.body, {
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

controller.deleteCPD = async (req, res) => {
  try {
    await CPD.destroy({
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
