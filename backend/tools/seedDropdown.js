// tools/seedSkillsJobs.js
const mongoose = require("mongoose");
const UserSkill = require("../models/Skill");
const Job = require("../models/JobTitle");

mongoose.connect("mongodb://localhost:27017/recruiterPortalDB");

const skills = ["Python", "React", "SQL", "Node.js", "Machine Learning"];
const jobs = ["Frontend Developer", "Backend Developer", "Data Analyst"];

Promise.all([
  ...skills.map(s => new UserSkill({ name: s }).save()),
  ...jobs.map(j => new Job({ title: j }).save())
]).then(() => {
  console.log("Skills and jobs seeded.");
  process.exit();
});
