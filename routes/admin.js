const express = require('express');
const { coursesAdmin} = require("../controller/courses");

const router = express.Router();
router.use(express.static('public'));

router.get("/tesadmin",   (req, res) => {
    res.send("ini admin")
    
});
router.use("/", (req, res, next) => {
    const role = req.cookies.type;
    if (role != "T") return res.render("err403");
    next();
});


router.get("/coursesPlan", coursesAdmin);

module.exports = router;