// import modul
const express = require("express");
const app = express();
const port = 8000;
const router = require("./routes/lecturers");
const routers = require("./routes/auth");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

app.use(bodyParser.json());
app.use(cors());

app.use(router);
app.use(routers);

//connect dengan port
app.listen(port, () => {
  console.log(`Server berada port  ${port}`);
});
