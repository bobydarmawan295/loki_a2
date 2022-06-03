const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const { authenticateToken } = require('../middleware/verifyToken');
const userRouter = express.Router();

userRouter.use(express.static('public'));

userRouter.get('/mahasiwa',  (req, res) => {
    res.send('ini Halaman mahasiswa');
});

module.exports = userRouter;
