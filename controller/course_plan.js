const course_plans = require("../models/course_plans");
const courses = require("../models/courses");
const lecturers = require("../models/lecturers");
const db = require("../config/conn");
const course_plan_lecturers = require("../models/course_plan_lecturers");
const course_plan_assessments = require("../models/course_plan_assessments");
const course_plan_details = require("../models/course_plan_details");
const course_los = require("../models/course_los");
const course_plan_references = require("../models/course_plan_references");
const { Op } = require("sequelize");

// const curricula = require("../models/curricula");

const getCourses = async (req, res) => {
  try {
    await course_plans
      .findAll({
        attributes: ["id", "course_id", "rev", "name", "semester", "code", "semester", "credit", "description"],
        include: [
          {
            model: courses,
            attributes: ["name", "semester", "curriculum_id"],
            required: true,
          },
          {
            model: lecturers,
            attributes: ["id", "name"],
            through: {
              attributes: ["updated_at", "created_at"],
            },
            required: false,
          },
          {
            model: course_los,
            as: "course_los",
            attributes: ["id", "course_plan_id", "code", "name"],
            required: false,
          },
          {
            model: course_plan_details,
            attributes: ["id", "course_plan_id", "week", "material", "method", "student_experience"],
            required: false,
          },
          {
            model: course_plan_references,
            attributes: ["id", "course_plan_id", "title", "author", "publisher", "year", "description"],
            required: false,
          },
          {
            model: course_plan_details,
            attributes: ["id", "course_plan_id", "week", "material", "method", "student_experience"],
            required: false,
          },
          {
            model: course_plan_assessments,
            attributes: ["id", "course_plan_id", "name", "percentage"],
            required: false,
          },
        ],
        where: {
          course_id: req.params.id,
          rev: req.params.rev,
        },
      })
      .then((result) => {
        if (result.length > 0) {
          res.render("dosen/course_plan", { items: result });
          //  res.status(200).json({
          //     message: 'mendapat data dosen',
          //     data: result
          // })
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

const cetakRps = async (req, res) => {
  try {
    await course_plans
      .findAll({
        attributes: ["id", "course_id", "rev", "name", "semester", "code", "semester", "credit", "description"],
        include: [
          {
            model: courses,
            attributes: ["name", "semester", "curriculum_id"],
            required: true,
          },
          {
            model: lecturers,
            attributes: ["id", "name"],
            through: {
              attributes: ["updated_at", "created_at"],
            },
            required: false,
          },
          {
            model: course_los,
            as: "course_los",
            attributes: ["id", "course_plan_id", "code", "name"],
            required: false,
          },
          {
            model: course_plan_details,
            attributes: ["id", "course_plan_id", "week", "material", "method", "student_experience"],
            required: false,
          },
          {
            model: course_plan_references,
            attributes: ["id", "course_plan_id", "title", "author", "publisher", "year", "description"],
            required: false,
          },
          {
            model: course_plan_details,
            attributes: ["id", "course_plan_id", "week", "material", "method", "student_experience"],
            required: false,
          },
          {
            model: course_plan_references,
            attributes: ["id", "course_plan_id", "title", "author", "publisher", "year", "description"],
            required: false,
          },
          {
            model: course_plan_assessments,
            attributes: ["id", "course_plan_id", "name", "percentage"],
            required: false,
          },
        ],
        where: {
          course_id: req.params.id,
          rev: req.params.rev,
        },
      })
      .then((result) => {
        if (result.length > 0) {
          res.render("dosen/cetakRps", { items: result });
          //  res.status(200).json({
          //     message: 'mendapat data dosen',
          //     data: result
          // })
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

const cetakRpsMahasiswa = async (req, res) => {
  try {
    await course_plans
      .findAll({
        attributes: ["id", "course_id", "rev", "name", "semester", "code", "semester", "credit", "description"],
        include: [
          {
            model: courses,
            attributes: ["name", "semester", "curriculum_id"],
            required: true,
          },
          {
            model: lecturers,
            attributes: ["id", "name"],
            through: {
              attributes: ["updated_at", "created_at"],
            },
            required: false,
          },
          {
            model: course_los,
            as: "course_los",
            attributes: ["id", "course_plan_id", "code", "name"],
            required: false,
          },
          {
            model: course_plan_details,
            attributes: ["id", "course_plan_id", "week", "material", "method", "student_experience"],
            required: false,
          },
          {
            model: course_plan_references,
            attributes: ["id", "course_plan_id", "title", "author", "publisher", "year", "description"],
            required: false,
          },
          {
            model: course_plan_details,
            attributes: ["id", "course_plan_id", "week", "material", "method", "student_experience"],
            required: false,
          },
          {
            model: course_plan_references,
            attributes: ["id", "course_plan_id", "title", "author", "publisher", "year", "description"],
            required: false,
          },
          {
            model: course_plan_assessments,
            attributes: ["id", "course_plan_id", "name", "percentage"],
            required: false,
          },
        ],
        where: {
          course_id: req.params.id,
          rev: req.params.rev,
        },
      })
      .then((result) => {
        if (result.length > 0) {
          res.render("mahasiswa/cetakRps", { items: result });
          //  res.status(200).json({
          //     message: 'mendapat data dosen',
          //     data: result
          // })
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

const editCoursePlan = async (req, res) => {
  try {
    await course_plans
      .findAll({
        attributes: ["id", "course_id", [db.fn("MAX", db.col("rev")), "rev"], "name", "alias_name", "semester", "code", "semester", "credit", "description"],
        include: [
          {
            model: courses,
            attributes: ["name", "semester", "curriculum_id"],
            required: true,
          },
          {
            model: lecturers,
            attributes: ["id", "name"],
            through: {
              attributes: ["updated_at", "created_at"],
            },
            required: false,
          },
          {
            model: course_los,
            as: "course_los",
            attributes: ["id", "course_plan_id", "code", "name"],
            required: false,
          },
          {
            model: course_plan_details,
            attributes: ["id", "course_plan_id", "week", "material", "method", "student_experience"],
            required: false,
          },
          {
            model: course_plan_references,
            attributes: ["id", "course_plan_id", "title", "author", "publisher", "year", "description"],
            required: false,
          },
          {
            model: course_plan_details,
            attributes: ["id", "course_plan_id", "week", "material", "method", "student_experience"],
            required: false,
          },
          {
            model: course_plan_references,
            attributes: ["id", "course_plan_id", "title", "author", "publisher", "year", "description"],
            required: false,
          },
        ],
        where: {
          course_id: req.params.id,
          rev: req.params.rev,
        },
      })
      .then((result) => {
        if (result.length > 0) {
          res.render("dosen/edit_rps", { items: result });
          // res.status(200).json({
          //     message: 'mendapat data dosen',
          //     data: result
          // })
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

const revisiRps = async (req, res) => {
  try {
    await course_plans
      .findAll({
        attributes: ["id", "course_id", [db.fn("MAX", db.col("rev")), "rev"], "name", "alias_name", "semester", "code", "semester", "credit", "description"],
        include: [
          {
            model: lecturers,
            attributes: ["id", "name"],
            through: {
              attributes: ["updated_at", "created_at"],
            },
            required: false,
          },
          {
            model: courses,
            attributes: ["id", "name", "semester", "curriculum_id", "alias_name"],
            right: true,
          },
        ],
        where: {
          course_id: req.params.id,
          rev: req.params.rev,
        },
        // raw:true
      })
      .then((result) => {
        if (result.length > 0) {
          res.render("dosen/revisi", { items: result });

          // res.status(200).json({
          //     message: 'mendapat data dosen',
          //     data: result
          // })
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

const updateCoursePlan = async (req, res) => {
  try {
    const { code, name, alias_name, credit, semester, description, course_id } = req.body;
    await course_plans.update(
      {
        code: code,
        name: name,
        course_id: course_id,
        alias_name: alias_name,
        credit: credit,
        semester: semester,
        description: description,
      },
      {
        where: {
          course_id: req.params.id,
          rev: req.params.rev,
        },
      }
    );
  } catch (error) {
    res.json({ message: error.message });
    // res.redirect("/dosen/add-course");
  }
};

const coursesAdmin = async (req, res) => {
  try {
    await course_plans
      .findAll({
        attributes: ["id", "course_id", [db.fn("MAX", db.col("rev")), "rev"], "name", "semester", "code", "semester", "credit"],
        group: ["course_id"],
        include: [
          {
            model: courses,
            attributes: ["name", "semester", "curriculum_id"],
            required: true,
          },
          {
            model: lecturers,
            attributes: ["id", "name"],
            through: {
              attributes: ["updated_at", "created_at"],
            },
            required: false,
          },
        ],
      })
      .then((result) => {
        if (result.length > 0) {
          res.render("admin/coursesPlan", { items: result });
          // res.status(200).json({
          //     message: 'mendapat data dosen',
          //     data: result
          // })
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

const cetakListRps = async (req, res) => {
  try {
    await course_plans
      .findAll({
        attributes: ["id", "course_id", [db.fn("COUNT", db.col("rev")), "rev"], "name", "semester", "code", "semester", "credit"],
        group: ["course_id"],
        include: [
          {
            model: courses,
            attributes: ["name", "semester", "curriculum_id"],
            required: true,
          },
          {
            model: lecturers,
            attributes: ["id", "name"],
            through: {
              attributes: ["updated_at", "created_at"],
            },
            required: false,
          },
        ],
      })
      .then((result) => {
        if (result.length > 0) {
          res.render("admin/cetakListRps", { items: result });
          // res.status(200).json({
          //     message: 'mendapat data dosen',
          //     data: result
          // })
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

// ================================Mahasiswa============================

const search = async (req, res) => {
  try {
    const { term } = req.query;
    await course_plans
      .findAll({
        attributes: ["id", "course_id", [db.fn("MAX", db.col("rev")), "rev"], "name", "code", "semester"],
        group: ["course_id"],
        where: {
          [Op.or]: [
            {
              name: {
                [Op.like]: term + "%",
              },
            },
            {
              code: {
                [Op.like]: term + "%",
              },
            },
          ],
        },
      })
      .then((result) => {
        if (result.length >= 0) {
          res.render("mahasiswa/search", { items: result });
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

const revisi = async (req, res) => {
  try {
    const { code, name, alias_name, credit, semester, description, rev, course_id } = req.body;
    await course_plans.create(
      {
        code: code,
        name: name,
        course_id: course_id,
        rev: parseInt(rev) + 1,
        alias_name: alias_name,
        credit: credit,
        semester: semester,
        description: description,
      },
      {
        where: {
          course_id: req.params.id,
          rev: req.params.rev,
        },
      }
    );
  } catch (error) {
    res.json({ message: error.message });
    // res.redirect("/dosen/add-course");
  }
};

const getAllCoursePlan = async (req, res) => {
  try {
    await course_plans
      .findAll({
        attributes: ["id", "course_id", [db.fn("MAX", db.col("rev")), "rev"], "name", "code", "semester"],
        group: ["course_id"],
      })
      .then((result) => {
        if (result.length > 0) {
          res.render("mahasiswa/courses", { items: result });
          //   res.status(200).json({
          //     message: 'mendapat data dosen',
          //     data: result
          // })
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

const getCourseMahasiswa = async (req, res) => {
  try {
    await course_plans
      .findAll({
        attributes: ["id", "course_id", "rev", "name", "semester", "code", "semester", "credit", "description"],
        include: [
          {
            model: courses,
            attributes: ["name", "semester", "curriculum_id"],
            required: true,
          },
          {
            model: lecturers,
            attributes: ["id", "name"],
            through: {
              attributes: ["updated_at", "created_at"],
            },
            required: false,
          },
          {
            model: course_los,
            as: "course_los",
            attributes: ["id", "course_plan_id", "code", "name"],
            required: false,
          },
          {
            model: course_plan_details,
            attributes: ["id", "course_plan_id", "week", "material", "method", "student_experience"],
            required: false,
          },
          {
            model: course_plan_references,
            attributes: ["id", "course_plan_id", "title", "author", "publisher", "year", "description"],
            required: false,
          },
          {
            model: course_plan_details,
            attributes: ["id", "course_plan_id", "week", "material", "method", "student_experience"],
            required: false,
          },
          {
            model: course_plan_assessments,
            attributes: ["id", "course_plan_id", "name", "percentage"],
            required: false,
          },
        ],
        where: {
          course_id: req.params.id,
          rev: req.params.rev,
        },
      })
      .then((result) => {
        if (result.length > 0) {
          res.render("mahasiswa/course_plan", { item: result });
          // res.status(200).json({
          //     message: 'mendapat data dosen',
          //     data: result
          // })
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

const getCourseAdmin = async (req, res) => {
  try {
    await course_plans
      .findAll({
        attributes: ["id", "course_id", "rev", "name", "semester", "code", "semester", "credit", "description"],
        include: [
          {
            model: courses,
            attributes: ["name", "semester", "curriculum_id"],
            required: true,
          },
          {
            model: lecturers,
            attributes: ["id", "name"],
            through: {
              attributes: ["updated_at", "created_at"],
            },
            required: false,
          },
          {
            model: course_los,
            as: "course_los",
            attributes: ["id", "course_plan_id", "code", "name"],
            required: false,
          },
          {
            model: course_plan_details,
            attributes: ["id", "course_plan_id", "week", "material", "method", "student_experience"],
            required: false,
          },
          {
            model: course_plan_references,
            attributes: ["id", "course_plan_id", "title", "author", "publisher", "year", "description"],
            required: false,
          },
          {
            model: course_plan_details,
            attributes: ["id", "course_plan_id", "week", "material", "method", "student_experience"],
            required: false,
          },
          {
            model: course_plan_assessments,
            attributes: ["id", "course_plan_id", "name", "percentage"],
            required: false,
          },
        ],
        where: {
          id: req.params.id,
          rev: req.params.rev,
        },
      })
      .then((result) => {
        if (result.length > 0) {
          res.render("admin/lihatRps", { items: result });
          // res.status(200).json({
          //     message: 'mendapat data dosen',
          //     data: result
          // })
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

module.exports = { getCourses, editCoursePlan, updateCoursePlan, revisi, revisiRps, cetakRps, coursesAdmin, getCourseMahasiswa, search, getAllCoursePlan, cetakRpsMahasiswa, cetakListRps, getCourseAdmin };
