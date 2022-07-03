const course_lo_details = require("../models/course_lo_details");
const { Op, where } = require("sequelize");
const course_los = require("../models/course_los");
const curriculum_los = require("../models/curriculum_los");
const course_plans = require("../models/course_plans");

const getCurriculumLos = async (req, res) => {
  const cld = await course_lo_details.findAll({
    attributes: ["id", "curriculum_lo_id", "course_lo_id"],
    include: [
      {
        model: curriculum_los,
        attributes: ["id", "code", "name"],
        required: false,
      },
      {
        model: course_los,
        attributes: ["id", "course_plan_id", "code", "name"],
        required: false,
        where: {
          id: req.params.id,
        },
      },
    ],
    where: {
      course_lo_id: req.params.cl,
    },
  });
  const course_plan = await course_plans.findAll({
    attributes: ["id", "rev"],
    where: {
      id: req.params.id,
      rev: req.params.rev,
    },
  });
  const cp = await curriculum_los.findAll({
    order: [["id", "ASC"]],
    attributes: ["id", "curriculum_id", "code", "name"],
  });
  const id = req.params.cl;
  const cpmk = await course_los.findOne({
    attributes: ["id", "course_plan_id", "code", "name"],
    where: {
      id: id,
    },
  });
  res.render("dosen/cpl", { course_plan, cld, cp, cpmk });
  //res.json(cld);
};

const tambahCP = async (req, res) => {
  const { id_cpmk, id_cpl } = req.body;
  const cplExist = await course_lo_details.findOne({
    attributes: ["curriculum_lo_id", "course_lo_id"],
    where: { [Op.and]: [{ curriculum_lo_id: id_cpl }, { course_lo_id: id_cpmk }] },
  });
  if (cplExist) return res.status(400).send("CP sudah ada");
  try {
    await course_lo_details.create({
      curriculum_lo_id: id_cpl,
      course_lo_id: id_cpmk,
    });
    res.redirect("back");
  } catch (error) {
    res.json({ message: error.message });
  }
};

const hapusCP = async (req, res) => {
  try {
    await course_lo_details.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("back");
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getPeta = async (req, res) => {
  const course_plan = await course_plans.findOne({
    attributes: ["id", "rev", "name"],
    where: {
      id: req.params.id,
      rev: req.params.rev,
    },
  });
  const cp = await curriculum_los.findAll({
    order: [["id", "ASC"]],
    attributes: ["id", "curriculum_id", "code", "name"],
  });
  const course_plan_id = req.params.id;
  const cpmkAll = await course_los.findAll({
    attributes: ["id", "course_plan_id", "code", "name"],
    include: [
      {
        model: curriculum_los,
        attributes: ["id", "code", "name"],
        required: false,
      },
    ],
    where: {
      course_plan_id: course_plan_id,
    },
  });
  res.render("admin/cplToCpmk", { course_plan, cp, cpmkAll });
  //res.json(cpmkAll);
};

const cetak = async (req, res) => {
  const course_plan = await course_plans.findOne({
    attributes: ["id", "rev", "name"],
    where: {
      id: req.params.id,
      rev: req.params.rev,
    },
  });
  const cp = await curriculum_los.findAll({
    order: [["id", "ASC"]],
    attributes: ["id", "curriculum_id", "code", "name"],
  });
  const course_plan_id = req.params.id;
  const cpmkAll = await course_los.findAll({
    attributes: ["id", "course_plan_id", "code", "name"],
    include: [
      {
        model: curriculum_los,
        attributes: ["id", "code", "name"],
        required: false,
      },
    ],
    where: {
      course_plan_id: course_plan_id,
    },
  });
  res.render("admin/cetakCplCPmk", { course_plan, cp, cpmkAll });
  //res.json(cpmkAll);
};
// const updateDetail = async (req, res) => {
//   try {
//     const { week, material, method, student_experience } = req.body;
//     await course_plan_details.update(
//       {
//         week: week,
//         material: material,
//         method: method,
//         student_experience: student_experience,
//       },
//       {
//         where: {
//           id: req.params.id,
//         },
//       }
//     );
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// };

module.exports = { cetak, getPeta, getCurriculumLos, tambahCP, hapusCP };
