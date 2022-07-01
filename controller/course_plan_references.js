const course_plan_references = require("../models/course_plan_references");
const { Op, where } = require("sequelize");
const course_plans = require("../models/course_plans");

const getReferences = async (req, res) => {
  try {
    await course_plans
      .findAll({
        attributes: ["id", "rev", "course_id", "name", "semester"],
        include: [
          {
            model: course_plan_references,
            attributes: ["id", "course_plan_id", "title", "author", "publisher", "year", "description"],
          },
        ],
        where: {
          rev: req.params.rev,
          id: req.params.id,
        },
      })
      .then((result) => {
        if (result.length > 0) {
          res.render("dosen/referensi", { items: result });
        } else {
          res.render("dosen/add_referensi", { items: result });
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

const getReferenceById = async (req, res) => {
  try {
    await course_plan_references
      .findOne({
        attributes: ["id", "course_plan_id", "title", "author", "publisher", "year", "description"],
        where: {
          id: req.params.id,
        },
      })
      .then((result) => {
        if (result) {
          res.render("dosen/edit_referensi", { items: result });
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
const createReference = async (req, res) => {
  try {
    const course_plan_id = req.params.id;
    const { title, author, publisher, year, description } = req.body;
    await course_plan_references.create({
      course_plan_id: course_plan_id,
      title: title,
      author: author,
      publisher: publisher,
      year: year,
      description: description,
    });
  } catch (error) {
    res.json({ message: error.message });
    // res.redirect("/dosen/add-course");
  }
};

const updateReference = async (req, res) => {
  try {
    const { title, author, publisher, year, description } = req.body;
    await course_plan_references.update(
      {
        title: title,
        author: author,
        publisher: publisher,
        year: year,
        description: description,
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

const deleteReference = async (req, res) => {
  try {
    await course_plan_references.destroy({
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

module.exports = { getReferences, getReferenceById, createReference, updateReference, deleteReference };
