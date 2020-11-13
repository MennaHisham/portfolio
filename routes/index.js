const router = require("express").Router();
const projectRoute = require("./projectRoute");

router.get("/", (req, res) => {
  res.send("Hello");
});

router.use("/api", projectRoute);

module.exports = router;
