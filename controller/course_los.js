const course_los = require("../models/course_los");
const { Op, where } = require("sequelize");

const getCourseLos = async (req, res) => {
  try {
    await course_los
      .findAll({
        attributes: ["id", "course_plan_id", "code", "name"],
        where: {
          course_plan_id: req.params.id,
        },
      })
      .then((result) => {
        if (result.length > 0) {
          res.render("dosen/cpmk", { items: result });
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

module.exports = { getCourseLos, createCourseLos, updateCourseLos, deleteCourseLos };
