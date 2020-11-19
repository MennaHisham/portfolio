require("./db");
require("dotenv").config();
const express = require("express");
const app = express();
const PORT= process.env.PORT || 8000;

const routes = require("./routes");
app.use(routes);

if(process.env.NODE_ENV=== 'production'){
  app.use(express.statc('client/build'));
}

app.listen(PORT , function () {
  console.log(`Listening on ${PORT}`);
});
