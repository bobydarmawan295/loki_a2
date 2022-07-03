const express = require("express");
const { coursesAdmin, cetakListRps, getCourseAdmin } = require("../controller/course_plan");
const { getDosen, tambahDosen, hapusDosen } = require("../controller/course_plan_lecturers");
const { cetak, getPeta } = require("../controller/course_lo_details");

const router = express.Router();
router.use(express.static("public"));

router.use("/", (req, res, next) => {
  const role = req.cookies.type;
  if (role != "T") return res.render("err403");
  next();
});

router.get("/coursesPlan", coursesAdmin);
router.get("/coursesPlan/:id/:rev", getDosen);
router.post("/tambahDosen", tambahDosen);
router.delete("/hapusdosen/:id", hapusDosen);
router.get("/coursesPlan/:id/:rev/cetakRps", getCourseAdmin);
router.get("/persentaseRps", (req, res) => {
  res.render("admin/persentaseRps");
});

router.get("/petaCplCpmk/:id/:rev", getPeta);

router.get("/cetakCplCpmk/:id/:rev", cetak);

router.get("/cetakListRps", cetakListRps);
module.exports = router;
