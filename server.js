// import modul
const express = require("express");
const app = express();
const port = 8000;
const routers = require("./routes/auth");
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser, adminAuth} = require('./middleware/authMiddleware');
require("dotenv/config");

app.use(routers);

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
app.set('view engine', 'ejs');

app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
app.use('/admin', adminAuth);
app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'));

//connect dengan port
app.listen(port, () => {
  console.log(`Server berada port  ${port}`);
});
