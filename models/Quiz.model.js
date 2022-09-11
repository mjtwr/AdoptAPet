const mongoose = require("mongoose");
const Schema = mongoose.Schema

const Pet = require("Pet")

const QuizSchema = new Schema({
    
    size: {
        type: String,
        enum: ["small","medium", "big"]
    }, 
    personality: {
        type: String,
        enum: ["energetic", "playful", "relaxed"]
    }, 
    sociability: {
        type: String,
        enum: ["sociable","no sociable"]
    },
    pets: [Pet]// {
       // type: String,
        //enum:["dog", "cat"] //id?? Pet Model??
    //}
    ,
    timestamps: true,
    user: objectId,
});

const Quiz = mongoose.model("Quiz", QuizSchema)

module.exports = Quiz;
