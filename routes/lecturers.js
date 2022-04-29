const express = require("express");
const router = express.Router();
const db = require("../config/database/conn");
const controller = require("../controller/index");

router.get("/", controller.lecturers.getAll);

module.exports = router;
