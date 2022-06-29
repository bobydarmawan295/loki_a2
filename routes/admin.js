const express = require('express');
const { coursesAdmin} = require("../controller/course_plan");
const { getDosen, tambahDosen, hapusDosen} = require("../controller/course_plan_lecturers");

const router = express.Router();
router.use(express.static('public'));

router.use("/", (req, res, next) => {
    const role = req.cookies.type;
    if (role != "T") return res.render("err403");
    next();
});

router.get("/coursesPlan", coursesAdmin);

router.get("/coursesPlan/:id", getDosen);
router.post("/tambahDosen", tambahDosen);

module.exports = router;