const mongoose = require("mongoose");
const Schema = mongoose.Schema

const PostSchema = new Schema({
    petname: String,
    name: String,
    comment: String,
    
    image: String,
    adoptionDate: Date
},{timestamps: true}
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;