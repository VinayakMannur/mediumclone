const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  slug: { type: String, unique: true },
  title: String,
  desc: String,
  img: String,
  views: { type: Number, default: 0 },
  category: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
},{timestamps: true});

module.exports = mongoose.model("Post", postSchema);
// 65be47fe77a1a1fb6f765c56