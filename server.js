const express = require('express');
const path = require('path');
const app = express();
const port = 8000

app.listen(port, () => {
    console.log(`Server berada port  ${port}`)
  })
