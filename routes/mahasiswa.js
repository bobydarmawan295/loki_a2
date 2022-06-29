const express = require("express");
const router = express.Router();
const { getAllCoursePlan, getCourseMahasiswa, search,cetakRpsMahasiswa } = require("../controller/course_plan");

router.use(express.static("public"));

router.get("/mahasiswa", (req, res) => {
  res.send("ini Halaman mahasiswa");
});

router.get("/home", (req, res) => {
  res.render("mahasiswa/home");
});

router.get("/cari", search);
router.get("/coursesPlan/:id/:rev", getCourseMahasiswa);
router.get("/coursesPlan", getAllCoursePlan);
router.get("/:id/:rev/cetakRps", cetakRpsMahasiswa);

module.exports = router;
