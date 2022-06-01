// import modul
require('dotenv').config();
const express = require("express");
const app = express();
const port = 8000;
const routers = require("./routes/auth");
const model = require('./models/users');
const cookieParser = require('cookie-parser');
const getUsers= require('./controller/users');
const { requireAuth, checkUser, adminAuth, mahasiswaAuth} = require('./middleware/authMiddleware');
require("dotenv/config");

app.use(routers);

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
app.set('view engine', 'ejs');
app.get('*', checkUser);

app.get('/dosen', requireAuth, (req, res) => res.render('home'));
app.get('/admin', adminAuth,  (req, res) => {
    model.findAll()
    .then(results => {
      res.render("admin", {data: results})
    });
});
app.get('/mahasiswa', mahasiswaAuth,  (req, res) => {
  res.render('mahasiswa')
});

app.use('/', (req, res) => {
  res.send('salah alamat')
})

//connect dengan port
app.listen(port, () => {
  console.log(`Server berada port  http://localhost:${process.env.PORT}`);
});
