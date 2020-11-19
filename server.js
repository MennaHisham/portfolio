require("./db");
require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const app = express();
const PORT= process.env.PORT || 8000;

app.use(express.json());


app.use(logger("dev"));

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
}
const routes = require("./routes");
app.use(routes);

app.use((req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

app.listen(PORT , function () {
  console.log(`Listening on ${PORT}`);
});
