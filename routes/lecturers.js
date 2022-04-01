<<<<<<< HEAD
//const data = require("../data.json");
const express = require("express");
const router = express.Router();
const db= require('../config/database/conn');
const controller = require('../controller/index');

//router.use(express.json())

router.get('/', controller.lecturers.getAll)

module.exports = router;
=======

>>>>>>> 6120a048f6448268bdb0c5765b9eca5783696d97
