const course_plan_lecturers = require("../models/course_plan_lecturers");
const { Op, where } = require("sequelize");
const lecturers = require("../models/lecturers");
const course_plans = require("../models/course_plans");

const getDosen = async (req, res) => {
  const pengampu = await course_plan_lecturers.findAll({
    attributes: ["id", "course_plan_id", "lecturer_id", "creator"],
    include: [
      {
        model: lecturers,
        attributes: ["id", "name", "phone", "reg_id"],
        required: false,
      },
      {
        model: course_plans,
        attributes: ["id", "rev"],
        required: false,
        where: {
          id: req.params.id,
          rev: req.params.rev,
        },
      },
    ],
    where: {
      course_plan_id: req.params.id,
    },
  });
  const dosen = await lecturers.findAll({
    order: [["name", "ASC"]],
    attributes: ["id", "name"],
  });
  const id = req.params.id;
  const rps = await course_plans.findOne({
    attributes: ["id", "course_id", "name", "semester"],
    where: {
      id: id,
    },
  });
  res.render("admin/dosenPengampu", { pengampu, dosen, rps });
  // res.status(200).json({
  //   message: "mendapat data dosen",
  //   data: pengampu,
  // });
};

const tambahDosen = async (req, res) => {
  const { id_rps, id_dosen } = req.body;
  const dosenExist = await course_plan_lecturers.findOne({
    attributes: ["course_plan_id", "lecturer_id"],
    where: { [Op.and]: [{ course_plan_id: id_rps }, { lecturer_id: id_dosen }] },
  });
  if (dosenExist) return res.status(400).send("Dosen sudah ada");
  try {
    await course_plan_lecturers.create({
      course_plan_id: id_rps,
      lecturer_id: id_dosen,
      creator: 0,
    });
    res.redirect("back");
  } catch (error) {
    res.json({ message: error.message });
  }
};

const hapusDosen = async (req, res) => {
  try {
    await course_plan_lecturers.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("back");
  } catch (error) {
    res.json({ message: error.message });
  }
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

module.exports = { getDosen, tambahDosen, hapusDosen };
