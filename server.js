// import modul 
const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

//request halaman homepage
app.get('/', (req, res) => {
  res.send('Selamat Datang (> <)')
})

//request halaman login
app.get('/login', (req, res) => {
  res.send("<h3>Ini adalah Halaman login</h3>")
});

//request halaman profil
app.get("/profile", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Halooo");
});

//request halaman salam, nama, nim
app.get("/salam/:nama/:nim", function (req, res) {
  res.send("Selamat Sore " + req.params.nama + " <br>nim anda " + req.params.nim);
});

//connect dengan port
app.listen(port, () => {
  console.log(`Server berada port  ${port}`);
});
