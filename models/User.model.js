const mongoose = require("mongoose");
const Schema = mongoose.Schema

const UserSchema= new Schema({
    name: String,
    lastName: String,
    phone: String,
    email: String,
    username: String,
    password:  String,
   city: String
    
});

const User = mongoose.model("User", UserSchema);

module.exports = User;