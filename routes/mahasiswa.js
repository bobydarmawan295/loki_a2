const express = require("express");
const router = express.Router();
const { getAllCoursePlan, getCourse, search } = require("../controller/course_plan");

router.use(express.static("public"));

router.get("/mahasiswa", (req, res) => {
  res.send("ini Halaman mahasiswa");
});

router.get("/home", (req, res) => {
  res.render("mahasiswa/home");
});

router.get("/cari", search);
router.get("/coursesPlan/:id/:rev", getCourse);
router.get("/coursesPlan", getAllCoursePlan);

module.exports = router;
