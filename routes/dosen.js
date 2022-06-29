const express = require("express");
const { getAllCourses, createCourse, getMatkul} = require("../controller/courses");
const { getCourses,editCoursePlan,updateCoursePlan,revisi,revisiRps,cetakRps} = require("../controller/course_plan");
const { getCourseLos, createCourseLos, updateCourseLos, deleteCourseLos, getCourseLosById } = require("../controller/course_los");
const { getDetail, getDetailById, createDetail, updateDetail, deleteDetail } = require("../controller/course_plan_details");
const { getReferences, createReference, getReferenceById, updateReference, deleteReference } = require("../controller/course_plan_references");
const { getAssessments, getAssessmentsById, createAssessments, updateAssessments, deleteAssessments } = require("../controller/course_plan_assessments");

const router = express.Router();

router.use("/", (req, res, next) => {
  const role = req.cookies.type;
  if (role != "D") return res.render("err403");
  next();
});

router.get("/:id/courses", getAllCourses);
router.get("/coursesPlan/:id/:rev", getCourses);
router.post("/coursesPlan/:id/:rev/edit", updateCoursePlan);
router.get("/coursesPlan/:id/:rev/edit", editCoursePlan)
router.post("/coursesPlan/:id/:rev/revisi", revisi);
router.get("/coursesPlan/:id/:rev/revisi", revisiRps)
router.get("/add-course", getMatkul);
router.post("/add-course", createCourse);
router.get("/:id/:rev/cetakRps", cetakRps);

// CPMK
router.get("/:id/CPMK", getCourseLos);
router.get("/:id/add-cpmk", (req, res) => {
  res.render("dosen/add_cpmk");
});
router.post("/:id/add-cpmk", createCourseLos);
router.get("/:id/edit-cpmk/:id", getCourseLosById);
router.put("/:id/edit-cpmk/:id", updateCourseLos);
router.delete("/:id/CPMK/:id", deleteCourseLos);

// Pertemuan Mingguan

router.get("/:id/pertemuan", getDetail);
router.get("/:id/add-pertemuan", (req, res) => {
  res.render("dosen/add_pertemuan");
});
router.post("/:id/add-pertemuan", createDetail);
router.delete("/:id/pertemuan/:id", deleteDetail);
router.get("/:id/edit-pertemuan/:id", getDetailById);
router.put("/:id/edit-pertemuan/:id", updateDetail);

//reference
router.get("/:id/referensi", getReferences);
router.get("/:id/add-referensi", (req, res) => {
  res.render("dosen/add_referensi");
});
router.post("/:id/add-referensi", createReference);
router.delete("/:id/referensi/:id", deleteReference);
router.get("/:id/edit-referensi/:id", getReferenceById);
router.put("/:id/edit-referensi/:id", updateReference);

//Penilaian
router.get("/:id/penilaian", getAssessments);
router.get("/:id/add-penilaian", (req, res) => {
  res.render("dosen/add_penilaian");
});
router.post("/:id/add-penilaian", createAssessments);
router.delete("/:id/penilaian/:id", deleteAssessments);
router.get("/:id/edit-penilaian/:id", getAssessmentsById);
router.put("/:id/edit-penilaian/:id", updateAssessments);

module.exports = router;
