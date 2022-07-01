const course_plans = require("../models/course_plans");
const courses = require("../models/courses");
const db = require("../config/conn");
const lecturers = require("../models/lecturers");
const curricula = require("../models/curricula");

const getAllCourses = async (req, res) => {
  try {
    await course_plans
      .findAll({
        attributes: ['id','course_id',[db.fn('MAX', db.col('rev')),'rev'],'name','semester'],
        group: ['course_id'],
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
            required:true,
            where: {
              id: req.params.id,
            }
          },
        ],
       
        // raw: true,
      })
      .then((result) => {
        if (result.length > 0) {
          res.render("dosen/courses", { items: result });
          // res.status(200).json({
          //     message: 'mendapat data dosen',
          //     data: result
          // })
        } else {
          res.render("dosen/no_rps");
        }
      });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

const getMatkul= async (req, res) => {
  try {
    await courses
      .findAll({
        attributes: ["id", "name", "semester","code","alias_name"],
        include: [
          {
            model: curricula,
            attributes: ["id", "name"],
            required: true,
          },
        ],
      })
      
      .then((result) => {
        if (result.length > 0) {
          res.render("dosen/add_rps", { items: result });
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

const createCourse = async (req, res) => {
  try {
    const { course_id,rev, code, name, alias_name, credit, semester, description } = req.body;
    await course_plans.create({
      course_id: course_id,
      rev: rev,
      code: code,
      name: name,
      alias_name: alias_name,
      credit: credit,
      semester: semester,
      description: description,
    });
    //   res.redirect("/dosen/courses");
  } catch (error) {
    res.json({ message: error.message });
    // res.redirect("/dosen/add-course");
  }
};



module.exports = { getAllCourses, createCourse, getMatkul};
