// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = require("../utils/consts");

const Pet = require("../models/Pet.model");

const pets = [
	{ petname: "Hoshi", pet: "dog", dob: "06/09/2021", size: "big", personality: "energetic", sociability: "sociable", city: "Merida", name: "Marijo", phone: "973973", status:"adopted", photo:""},
	{petname:"Doroteo", pet:"cat", dob:"02/06/2021",size:"small", personality:"playful", sociability:"sociable", city:"Cuernavaca", phone:"777123456", status:"looking for a family", photo:""},
	{petname:"Avena", pet:"dog", dob:"03/08/2021",size:"medium", personality:"energetic", sociability:"sociable", city:"Cuernavaca", phone:"777123456", status:"looking for a family", photo:""},
	{petname:"Pasita", pet:"cat", dob:"04/02/2021",size:"small", personality:"relaxed", sociability:"no sociable", city:"Cuernavaca", phone:"777123456", status:"looking for a family", photo:""},
	{petname:"Frijol", pet:"cat", dob:"07/06/2021",size:"small", personality:"playful", sociability:"sociable", city:"Cuernavaca", phone:"777123456", status:"looking for a family", photo:""},
	{petname:"Moscow", pet:"dog", dob:"09/04/2021",size:"big", personality:"playful", sociability:"sociable", city:"Cuernavaca", phone:"777123456", status:"looking for a family", photo:""},
	{petname:"Porfirio", pet:"cat", dob:"12/08/2021",size:"small", personality:"energetic", sociability:"sociable", city:"Cuernavaca", phone:"777123456", status:"looking for a family", photo:""},
	{petname:"Saly", pet:"dog", dob:"01/01/2021",size:"medium", personality:"relaxed", sociability:"sociable", city:"Cuernavaca", phone:"777123456", status:"looking for a family", photo:""},
	

];
mongoose
  .connect(MONGO_URI)
  .then((x) => {
		return Pet.create(pets)
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
