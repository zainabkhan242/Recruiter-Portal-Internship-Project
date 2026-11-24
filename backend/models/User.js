const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  skills: [String],
  jobTitle: String,
  location: String,
  resumeUrl: String
}, { collection: "gts_users" });

module.exports = mongoose.connection.useDb("gtsuserportal").model("User", userSchema);
