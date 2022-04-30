const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const db = require("../config/database/conn");
const users = require("../models/users");

router.post("/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, process.env.SECRET_KEY, (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "Post created...",
        authData,
      });
    }
  });
});

router.post("/login", async (req, res) => {
  const user = await users.findOne({ where: { email: req.body.email } });
  if (!user)
    return res.status(400).json({
      status: res.statusCode,
      message: "email anda salah!",
    });
  const validPwd = await users.findOne({ where: { password: req.body.password } });
  if (!validPwd)
    return res.status(400).json({
      status: res.statusCode,
      message: "Password Anda Salah!",
    });

  // membuat token menggunkan JWT
  const token = jwt.sign({ user }, process.env.SECRET_KEY);
  res.header("auth-token", token).json({
    token: token,
  });
});

function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers["authorization"];
  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split at the space
    const bearer = bearerHeader.split(" ");
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

module.exports = router;
