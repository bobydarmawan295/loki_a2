const express = require("express");
const router = express.Router();

//request halaman depan
router.get("/", (req, res) => {
  res.send("Selamat Datang (> <)");
});

//request halaman login
router.get("/login", (req, res) => {
  res.send("<h3>Ini adalah Halaman login</h3>");
});

//request halaman homepage (beranda)
router.get("/home", (req, res) => {
  res.send("Ini adalah Halaman Home");
});

//request halaman about
router.get("/about", (req, res) => {
  res.send("Ini Adalah Halaman about");
});

//request halaman profil
router.get("/profile", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Halooo");
});

//request halaman salam, nama, nim
router.get("/salam/:nama/:nim", function (req, res) {
  res.send("Selamat Sore " + req.params.nama + " <br>nim anda " + req.params.nim);
});

module.exports = router;
