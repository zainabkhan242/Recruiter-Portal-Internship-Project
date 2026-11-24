const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  gts_skill_name: String
}, { collection: "gts_skills" });

module.exports = mongoose.connection.useDb("gtsuserportal").model("Skill", skillSchema);
