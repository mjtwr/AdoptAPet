const mongoose = require("mongoose");
const Schema = mongoose.Schema

const PetSchema = new Schema({
    name:String,
    pet: {
        type: String,
        enum:["dog", "cat"]
    },
    dateOfBirth: Date, 
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
    contact: {
        phone: Number, 
        name: String, 
        lastName: String, 
        email: String
    }, 
    adopted: Boolean,
    // user: objectId,
    
},{
 timestamps: true,
});

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;