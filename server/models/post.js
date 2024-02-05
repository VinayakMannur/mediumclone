const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  slug: { type: String, unique: true },
  title: String,
  desc: String,
  img: String,
  views: { type: Number, default: 0 },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
},{timestamps: true});

module.exports = mongoose.model("Post", postSchema);
