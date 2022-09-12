const mongoose = require("mongoose");
const Schema = mongoose.Schema

const PetSchema = new Schema({
    petname: String,
    pet: {
        type: String,
        enum:["dog", "cat"]
    },
    dob: Date, 
    size: {
        type: String,
        enum: ["small","medium", "big"],
    }, 
    personality: {
        type: String,
        enum: ["energetic", "playful", "relaxed"],
    }, 
    sociability: {
        type: String,
        enum: ["sociable","no sociable"] ,
    },
    city: String,
    phone: String,
    name: String,
    status: {
        type: String,
        enum: ["looking for a family", "adopted"]
    },
    //user: ObjectId,
    
},{
timestamps: true,
});

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;