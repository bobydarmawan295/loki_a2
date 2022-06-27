const express = require("express");
const { authenticateToken } = require("../middleware/verifyToken");
const { getRev } = require("../controller/course_plan");

const router = express.Router();
router.use(express.static("public"));

router.get("/tesadmin", (req, res) => {
  res.send("ini admin");
});

router.use("/", (req, res, next) => {
  const role = req.cookies.type;
  if (role != "T") return res.render("eror403");
  next();
});

router.get("/home.laporan", getRev);

module.exports = router;
