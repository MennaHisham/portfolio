const router = require("express").Router();
const Project = require("../db/Project");

router.get("/projects", (req, res, next) => {
  Project.find().then((projects) => {
    res.json(projects);
  });
});

router.get("/project/:name", async (req, res) => {
  const namequery = req.params.name;
  await Project.findOne({ name: namequery }).then(work=>{
    res.json(work)
  }).catch(err=>{
    res.status(500).json({
      message: err.message
    })
  })

});

module.exports = router;
