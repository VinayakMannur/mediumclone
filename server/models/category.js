const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  slug: { type: String, unique: true },
  title: String,
  img: String,
});

module.exports = mongoose.model("Category", categorySchema);