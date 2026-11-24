const mongoose = require("mongoose");

const dropdownSchema = new mongoose.Schema({
  type: String, // 'skill' or 'job'
  value: String
});

module.exports = mongoose.model("Dropdown", dropdownSchema);
