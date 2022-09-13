// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = require("../utils/consts");

const Pet = require("../models/Pet.model");

const pets = [
	{ petname: "Hoshi", pet: "dog", dob: "06/09/2021", size: "big", personality: "energetic", sociability: "sociable", city: "Merida", name: "Marijo", phone: "973973", status:"adopted", photo:"https://www.nationalgeographic.com.es/medio/2021/09/03/cavalier-king-charles-spaniel_923c8941_2000x1332.jpg"},
	{petname:"Doroteo", pet:"cat", dob:"02/06/2021",size:"small", personality:"playful", sociability:"sociable", city:"Cuernavaca", phone:"777123456", status:"looking for a family", photo:"https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600"},
	{petname:"Avena", pet:"dog", dob:"03/08/2021",size:"medium", personality:"energetic", sociability:"sociable", city:"Cuernavaca", phone:"777123456", status:"looking for a family", photo:"https://www.nationalgeographic.com.es/medio/2021/03/20/urban-animal_447c1809_1469x1500.jpg"},
	{petname:"Pasita", pet:"cat", dob:"04/02/2021",size:"small", personality:"relaxed", sociability:"no sociable", city:"Cuernavaca", phone:"777123456", status:"looking for a family", photo:"https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=600"},
	{petname:"Frijol", pet:"cat", dob:"07/06/2021",size:"small", personality:"playful", sociability:"sociable", city:"Cuernavaca", phone:"777123456", status:"looking for a family", photo:"https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=600"},
	{petname:"Moscow", pet:"dog", dob:"09/04/2021",size:"big", personality:"playful", sociability:"sociable", city:"Cuernavaca", phone:"777123456", status:"looking for a family", photo:"https://www.nationalgeographic.com.es/medio/2021/03/09/perro_4da5a8be_800x1200.jpg"},
	{petname:"Porfirio", pet:"cat", dob:"12/08/2021",size:"small", personality:"energetic", sociability:"sociable", city:"Cuernavaca", phone:"777123456", status:"looking for a family", photo:"https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=600"},
	{petname:"Saly", pet:"dog", dob:"01/01/2021",size:"medium", personality:"relaxed", sociability:"sociable", city:"Cuernavaca", phone:"777123456", status:"looking for a family", photo:"https://www.nationalgeographic.com.es/medio/2020/04/23/cheese-catcher_8306c329_1043x1076.jpg"},
	

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
