const mongoose = require("mongoose");
const Schema = mongoose.Schema

const PostSchema = new Schema({
    petname:  {
        type: String,
        // required: true
    },
    name:  {
        type: String,
        // required: true
    },
    comment:  {
        type: String,
        // required: true
    },
    image:  {
        type: String,
        // required: true
    },
    adoptionDate:  {
        type: String,
        // required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        // required: true
    },
},{
    timestamps: true
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;