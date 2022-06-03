const express = require('express');
const { authenticateToken } = require('../middleware/verifyToken');

const router = express.Router();




router.get("/tesdosen",  (req, res) => {
    res.send('ini dosen')
});

router.get('/dosen',  (req, res) => {
    res.send('ini Halaman dosen');
});

router.get('/list-rps', (req, res) => {
    res.render('list-rps');
}); 

router.get('/rps', (req, res) => {
    res.render('rps');
}); 
module.exports = router;
