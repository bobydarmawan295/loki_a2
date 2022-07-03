const express = require("express");
const { getAllCourses, createCourse, getMatkul } = require("../controller/courses");
const { getCurriculumLos, hapusCP, tambahCP } = require("../controller/course_lo_details");
const { getCourses, editCoursePlan, updateCoursePlan, revisi, revisiRps, cetakRps } = require("../controller/course_plan");
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
router.put("/coursesPlan/:id/:rev/edit", updateCoursePlan);
router.get("/coursesPlan/:id/:rev/edit", editCoursePlan);
router.post("/coursesPlan/:id/:rev/revisi", revisi);
router.get("/coursesPlan/:id/:rev/revisi", revisiRps);
router.get("/add-course", getMatkul);
router.post("/add-course", createCourse);
router.get("/:id/:rev/cetakRps", cetakRps);

// CPMK
router.get("/:id/:rev/CPMK", getCourseLos);
router.get("/:id/:rev/add-cpmk", (req, res) => {
  res.render("dosen/add_cpmk");
});
router.post("/:id/:rev/add-cpmk", createCourseLos);
router.get("/:id/:rev/edit-cpmk/:id", getCourseLosById);
router.put("/:id/:rev/edit-cpmk/:id", updateCourseLos);
router.delete("/:id/:rev/CPMK/:id", deleteCourseLos);

//CPL
router.get("/:id/:rev/cpl/:cl", getCurriculumLos);
router.delete("/cpl/:id", hapusCP);
router.post("/cpl/tambah", tambahCP);
// Pertemuan Mingguan

router.get("/:id/:rev/pertemuan", getDetail);
router.get("/:id/:rev/add-pertemuan", (req, res) => {
  res.render("dosen/add_pertemuan");
});
router.post("/:id/:rev/add-pertemuan", createDetail);
router.delete("/:id/:rev/pertemuan/:id", deleteDetail);
router.get("/:id/:rev/edit-pertemuan/:id", getDetailById);
router.put("/:id/:rev/edit-pertemuan/:id", updateDetail);

//reference
router.get("/:id/:rev/referensi", getReferences);
router.get("/:id/:rev/add-referensi", (req, res) => {
  res.render("dosen/add_referensi");
});
router.post("/:id/:rev/add-referensi", createReference);
router.delete("/:id/:rev/referensi/:id", deleteReference);
router.get("/:id/:rev/edit-referensi/:id", getReferenceById);
router.put("/:id/:rev/edit-referensi/:id", updateReference);

//Penilaian
router.get("/:id/:rev/penilaian", getAssessments);
router.get("/:id/:rev/add-penilaian", (req, res) => {
  res.render("dosen/add_penilaian");
});
router.post("/:id/:rev/add-penilaian", createAssessments);
router.delete("/:id/:rev/penilaian/:id", deleteAssessments);
router.get("/:id/:rev/edit-penilaian/:id", getAssessmentsById);
router.put("/:id/:rev/edit-penilaian/:id", updateAssessments);

module.exports = router;
