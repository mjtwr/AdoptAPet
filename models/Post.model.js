const mongoose = require("mongoose");
const Schema = mongoose.Schema

const PostSchema = new Schema({
    petname: String,
    name: String,
    comment: String,
    timestamps: true,
    image: String
});

const Pet = mongoose.model("Post", PostSchema);

module.exports = Post;