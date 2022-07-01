const course_plan_assessments = require("../models/course_plan_assessments");
const { Op, where } = require("sequelize");
const course_plans = require("../models/course_plans");

const getAssessments = async (req, res) => {
  try {
    await course_plans
      .findAll({
        attributes: ["id", "rev", "course_id", "name", "semester"],
        include: [
          {
            model: course_plan_assessments,
            attributes: ["id", "course_plan_id", "name", "percentage"],
          },
        ],
        where: {
          rev: req.params.rev,
          id: req.params.id,
        },
      })
      .then((result) => {
        if (result.length > 0) {
          res.render("dosen/penilaian", { items: result });
        } else {
          res.render("dosen/add_penilaian", { items: result });
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

const getAssessmentsById = async (req, res) => {
  try {
    await course_plan_assessments
      .findOne({
        attributes: ["id", "course_plan_id", "name", "percentage"],
        where: {
          id: req.params.id,
        },
      })
      .then((result) => {
        if (result) {
          res.render("dosen/edit_penilaian", { items: result });
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
const createAssessments = async (req, res) => {
  try {
    const course_plan_id = req.params.id;
    const { name, percentage } = req.body;
    await course_plan_assessments.create({
      course_plan_id: course_plan_id,
      name: name,
      percentage: percentage,
      flag: 1,
    });
  } catch (error) {
    res.json({ message: error.message });
    // res.redirect("/dosen/add-course");
  }
};

const updateAssessments = async (req, res) => {
  try {
    const { name, percentage } = req.body;
    await course_plan_assessments.update(
      {
        name: name,
        percentage: percentage,
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

const deleteAssessments = async (req, res) => {
  try {
    await course_plan_assessments.destroy({
      where: {
        id: req.params.id,
      },
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
// const createCourse = async (req, res) => {
//   try {
//     const { curriculum_id, code, name, alias, credit, semester, description } = req.body;
//     await courses.create({
//       curriculum_id: curriculum_id,
//       code: code,
//       name: name,
//       alias_name: alias,
//       credit: credit,
//       semester: semester,
//       description: description,
//     });
//     //
//   } catch (error) {
//     res.json({ message: error.message });
//     // res.redirect("/dosen/add-course");
//   }
// };

// export const getProductById = async (req, res) => {
//     try {
//         const product = await Product.findAll({
//             where: {
//                 id: req.params.id
//             }
//         });
//         res.json(product[0]);
//     } catch (error) {
//         res.json({ message: error.message });
//     }
// }

// export const updateProduct = async (req, res) => {
//     try {
//         await Product.update(req.body, {
//             where: {
//                 id: req.params.id
//             }
//         });
//         res.json({
//             "message": "Product Updated"
//         });
//     } catch (error) {
//         res.json({ message: error.message });
//     }
// }

module.exports = { getAssessments, getAssessmentsById, createAssessments, updateAssessments, deleteAssessments };
