// import modul
const express = require("express");
const path = require("path");
const app = express();
const port = 8000;
const router = require("./router/router");

app.use(router);

//connect dengan port
app.listen(port, () => {
  console.log(`Server berada port  ${port}`);
});
