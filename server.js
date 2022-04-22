// import modul
const express = require("express");
const app = express();
const port = 8000;
const router = require("./routes/lecturers");

app.use(router);

//connect dengan port
app.listen(port, () => {
  console.log(`Server berada port  ${port}`);
});
