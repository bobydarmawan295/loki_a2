const express = require("express");
const { getAllCourses, createCourse } = require("../controller/courses");
const { getCourses } = require("../controller/course_plan");
const { getCourseLos, createCourseLos, updateCourseLos, deleteCourseLos, getCourseLosById } = require("../controller/course_los");
const { getReferences, createReference, getReferenceById, updateReference, deleteReference } = require("../controller/course_plan_references");
const { getDetail, getDetailById, createDetail, updateDetail, deleteDetail } = require("../controller/course_plan_details");
const { getAssessments, getAssessmentsById, createAssessments, updateAssessments, deleteAssessments } = require("../controller/course_plan_assessments");

const router = express.Router();

router.use("/", (req, res, next) => {
  const role = req.cookies.type;
  if (role != "D") return res.render("eror403");
  next();
});

router.get("/tesdosen", (req, res) => {
  res.send("ini dosen");
});

router.get("/dosen", (req, res) => {
  res.send("ini Halaman dosen");
});

//course
router.get("/courses", getAllCourses);
router.get("/coursesPlan/:id", getCourses);

router.get("/add-course", (req, res) => {
  res.render("dosen/add_rps");
});

router.post("/add-course", createCourse);

//course plan
router.get("/coursesPlan/:id/CPMK", getCourseLos);

router.get("/coursesPlan/:id/add-cpmk", (req, res) => {
  res.render("dosen/add_cpmk");
});
router.post("/coursesPlan/:id/add-cpmk", createCourseLos);

router.get("/coursesPlan/:id/edit-cpmk/:id", getCourseLosById);
router.put("/coursesPlan/:id/edit-cpmk/:id", updateCourseLos);

router.delete("/coursesPlan/:id/CPMK/:id", deleteCourseLos);

//reference
router.get("/coursesPlan/:id/referensi", getReferences);
router.get("/coursesPlan/:id/add-referensi", (req, res) => {
  res.render("dosen/add_referensi");
});
router.post("/coursesPlan/:id/add-referensi", createReference);

router.delete("/coursesPlan/:id/referensi/:id", deleteReference);

router.get("/coursesPlan/:id/edit-referensi/:id", getReferenceById);
router.put("/coursesPlan/:id/edit-referensi/:id", updateReference);

//detail pertemuan
router.get("/coursesPlan/:id/pertemuan", getDetail);
router.get("/coursesPlan/:id/add-pertemuan", (req, res) => {
  res.render("dosen/add_pertemuan");
});
router.post("/coursesPlan/:id/add-pertemuan", createDetail);

router.delete("/coursesPlan/:id/pertemuan/:id", deleteDetail);

router.get("/coursesPlan/:id/edit-pertemuan/:id", getDetailById);
router.put("/coursesPlan/:id/edit-pertemuan/:id", updateDetail);

//Penilaian
router.get("/coursesPlan/:id/penilaian", getAssessments);
router.get("/coursesPlan/:id/add-penilaian", (req, res) => {
  res.render("dosen/add_penilaian");
});
router.post("/coursesPlan/:id/add-penilaian", createAssessments);

router.delete("/coursesPlan/:id/penilaian/:id", deleteAssessments);

router.get("/coursesPlan/:id/edit-penilaian/:id", getAssessmentsById);
router.put("/coursesPlan/:id/edit-penilaian/:id", updateAssessments);

module.exports = router;
