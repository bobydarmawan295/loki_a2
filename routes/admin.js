const express = require('express');
const { authenticateToken } = require('../middleware/verifyToken');

const router = express.Router();
router.use(express.static('public'));

router.get("/tesadmin",   (req, res) => {
    res.send("ini admin")
});











module.exports = router;