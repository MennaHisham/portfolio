const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  _id: String,
  name: String,
  link: String,
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
