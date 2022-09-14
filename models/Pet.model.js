const mongoose = require("mongoose");
const Schema = mongoose.Schema

const PetSchema = new Schema({
    petname: {
        type: String,
        required: true
    },
    pet: {
        type: String,
        enum:["dog", "cat"],
        required: true
    },
    dob: Date, 
    size: {
        type: String,
        enum: ["small","medium", "big"],
        required: true
    }, 
    personality: {
        type: String,
        enum: ["energetic", "playful", "relaxed"],
        required: true
    }, 
    sociability: {
        type: String,
        enum: ["sociable","no sociable"],
        required: true
    },
    city:  {
        type: String,
        required: true
    },
    phone:  {
        type: String,
        required: true
    },
    name:  {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["looking for a family", "adopted"],
        required: true
    },
	image: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    
},{
timestamps: true,
});

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;