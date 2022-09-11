const mongoose = require("mongoose");
const Schema = mongoose.Schema

const Pet = require("Pet")

const UserSchema= new Schema({
    name: String,
    lastName: String,
    phone: String,
    email: String,
    userName: String,
    password:  String,
   city: String
    
});

const User = model("User", UserSchema);

model.exports = User;