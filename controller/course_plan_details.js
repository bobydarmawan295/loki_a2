const course_plan_details = require("../models/course_plan_details");
const { Op, where } = require("sequelize");
const course_plans = require("../models/course_plans");

const getDetail = async (req, res) => {
  try {
    await course_plans
      .findAll({
        attributes: ["id", "rev", "course_id", "name", "semester"],
        include: [
          {
            model: course_plan_details,
            attributes: ["id", "course_plan_id", "week", "material", "method", "student_experience"],
          },
        ],
        where: {
          rev: req.params.rev,
          id: req.params.id,
        },
      })
      .then((result) => {
        if (result.length > 0) {
          res.render("dosen/pertemuan", { items: result });
        } else {
          res.render("dosen/add_pertemuan", { items: result });
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

const getDetailById = async (req, res) => {
  try {
    await course_plan_details
      .findOne({
        attributes: ["id", "course_plan_id", "week", "material", "method", "student_experience"],
        where: {
          id: req.params.id,
        },
      })
      .then((result) => {
        if (result) {
          res.render("dosen/edit_pertemuan", { items: result });
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
const createDetail = async (req, res) => {
  try {
    const course_plan_id = req.params.id;
    const { week, material, method, student_experience } = req.body;
    await course_plan_details.create({
      course_plan_id: course_plan_id,
      week: week,
      material: material,
      method: method,
      student_experience: student_experience,
    });
  } catch (error) {
    res.json({ message: error.message });
    // res.redirect("/dosen/add-course");
  }
};

const updateDetail = async (req, res) => {
  try {
    const { week, material, method, student_experience } = req.body;
    await course_plan_details.update(
      {
        week: week,
        material: material,
        method: method,
        student_experience: student_experience,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
  } catch (error) {
    res.json({ message: error.message });
  }
};

const deleteDetail = async (req, res) => {
  try {
    await course_plan_details.destroy({
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

module.exports = { getDetail, getDetailById, createDetail, updateDetail, deleteDetail };
