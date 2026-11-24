const express = require("express");
const router = express.Router();
const Skill = require("../models/Skill");
const JobTitle = require("../models/JobTitle");
const User = require("../models/User");

// Get 10k skills from gts_skills
router.get("/dropdowns/skill", async (req, res) => {
  try {
    const skills = await Skill.find({}, "gts_skill_name").limit(10000);
    const names = skills.map(s => s.gts_skill_name).filter(Boolean);
    res.json(names.sort());
  } catch (err) {
    console.error("Error fetching skills:", err);
    res.status(500).json({ error: "Failed to fetch skills" });
  }
});


// Get 10k job titles from gts_job_titles
router.get("/dropdowns/job", async (req, res) => {
  try {
    const jobs = await JobTitle.find({}, "gts_job_title_name").limit(10000);
    const titles = jobs.map(j => j.gts_job_title_name).filter(Boolean);
    res.json(titles.sort());
  } catch (err) {
    console.error("Error fetching job titles:", err);
    res.status(500).json({ error: "Failed to fetch job titles" });
  }
});


// Get top 5 matching candidates
router.get("/match", async (req, res) => {
  const { skill, job } = req.query;

  try {
    const users = await User.find({
      skills: skill.toLowerCase(),
      jobTitle: { $regex: job, $options: "i" }
    }).limit(5);

    res.json(users);
  } catch (err) {
    console.error("Match fetch error:", err);
    res.status(500).json({ error: "Failed to fetch matching candidates" });
  }
});

module.exports = router;
