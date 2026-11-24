const mongoose = require("mongoose");

const jobTitleSchema = new mongoose.Schema({
  gts_job_title_name: String
}, { collection: "gts_job_titles" });

module.exports = mongoose.connection.useDb("gtsuserportal").model("JobTitle", jobTitleSchema);
