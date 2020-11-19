require("./db");
require("dotenv").config();
const express = require("express");
const app = express();

const routes = require("./routes");
app.use(routes);

app.listen(process.env.PORT || 8000, function () {
  console.log(`Listening on ${process.env.PORT}`);
});
