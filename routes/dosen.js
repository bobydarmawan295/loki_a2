const express = require('express');
const {getAllCourses, createCourse} =  require('../controller/courses');
const {getCourses} =  require('../controller/course_plan');


const router = express.Router();

router.use("/", (req, res, next) => {
    const role = req.cookies.type;
    if (role != "D") return res.render("eror403");
    next();
});

router.get("/tesdosen",  (req, res) => {
    res.send('ini dosen')
});

router.get('/dosen',  (req, res) => {
    res.send('ini Halaman dosen');
});

router.get('/courses', getAllCourses); 

router.get('/coursesPlan/:id', getCourses); 

// router.get('/courses', (req, res) => {
//     res.render('courses');
// }); 

// router.get('/course-plan', (req, res) => {
//     res.render('dosen/course_plan');
// }); 

router.get('/add-course', (req, res) => {
    res.render('dosen/add_rps');
}); 

router.post('/add-course', createCourse); 


module.exports = router;
