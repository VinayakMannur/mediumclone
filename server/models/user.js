const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    googleId: String,
    displayName: String,
    email: String,
    image: String,
},{timestamps: true})


module.exports = mongoose.model("User", userSchema);