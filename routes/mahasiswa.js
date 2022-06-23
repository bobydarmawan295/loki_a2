const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const { authenticateToken } = require('../middleware/verifyToken');
const userRouter = express.Router();

userRouter.use(express.static('public'));

userRouter.get('/mahasiswa',  (req, res) => {
    res.send('ini Halaman mahasiswa');
});


userRouter.get("/homemhs", (req, res) => {
    res.render("mahasiswa/mahasiswa");
  });
  module.exports = userRouter;