const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    desc: String,
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
},{timestamps: true})

module.exports = mongoose.model("Comment", commentSchema);
// 65be47fe77a1a1fb6f765c56
// 65c36e02e33738649efdb41b