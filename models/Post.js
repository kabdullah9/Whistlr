const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: { type: String, required: true },
    category: { type: String, required: true, default: "General" },
    body: { type: String, required: true } 
})

const Post = mongoose.model("Post", postSchema);

module.exports = Post;