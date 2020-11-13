const router = require("express").Router();
const Project = require("../db/Project");

router.get("/projects", (req, res, next) => {
  Project.find().then((projects) => {
    res.json(projects);
  });
});

module.exports = router;
