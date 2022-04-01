<<<<<<< HEAD
const express = require("express");
const router = express.Router();
const data = require("../data.json");
const lecturer = require('../config/models/course_plan_references.js')
var {sequelize} = require("sequelize");

//file tempat tambah, ubah, hapus referensi 

//tambah referensi dari tabel course_plan_references
router.get('/dosen/tambahReferensi',(req, res, next) => {

    var connection = new Sequelize();
    
  });

=======
const express = require("express");
const router = express.Router();
const data = require("../data.json");
const lecturer = require('../config/models/course_plan_references.js')
var {sequelize} = require("sequelize");

//file tempat tambah, ubah, hapus referensi 

//tambah referensi dari tabel course_plan_references
router.get('/dosen/tambahReferensi',(req, res, next) => {

    var connection = new Sequelize();
    
  });

>>>>>>> 6120a048f6448268bdb0c5765b9eca5783696d97
module.exports = router;