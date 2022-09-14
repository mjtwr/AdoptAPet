// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = require("../utils/consts");

const Pet = require("../models/Pet.model");

const pets = [
	{ petname: "Hoshi", pet: "dog", dob: "06/09/2021", size: "big", personality: "energetic", sociability: "sociable", city: "Merida", name: "Marijo", phone: "973973", status:"adopted", photo:"https://st.depositphotos.com/1146092/1285/i/450/depositphotos_12854128-stock-photo-hungry-dog-food-bowl.jpg"},
	{petname:"Avena", pet:"dog", dob:"03/08/2021",size:"medium", personality:"energetic", sociability:"sociable", city:"Cuernavaca", phone:"777123456", status:"looking for a family", photo:"https://static3.depositphotos.com/1003800/170/i/450/depositphotos_1705693-stock-photo-germain-shorthaired-pointer.jpg"},
	{petname:"Pasita", pet:"cat", dob:"04/02/2021",size:"small", personality:"relaxed", sociability:"no sociable", city:"Cuernavaca", phone:"777123456", status:"looking for a family", photo:"https://static5.depositphotos.com/1035187/435/i/450/depositphotos_4354152-stock-photo-happy-cat.jpg"},
	{petname:"Frijol", pet:"cat", dob:"07/06/2021",size:"small", personality:"playful", sociability:"sociable", city:"Cuernavaca", phone:"777123456", status:"looking for a family", photo:"https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=600"},
	{petname:"Moscow", pet:"dog", dob:"09/04/2021",size:"big", personality:"playful", sociability:"sociable", city:"Cuernavaca", phone:"777123456", status:"looking for a family", photo:"https://www.nationalgeographic.com.es/medio/2021/03/09/perro_4da5a8be_800x1200.jpg"},
	{petname:"Porfirio", pet:"cat", dob:"12/08/2021",size:"small", personality:"energetic", sociability:"sociable", city:"Cuernavaca", phone:"777123456", status:"looking for a family", photo:"https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=600"},
	{petname:"Sally", pet:"dog", dob:"01/01/2021",size:"medium", personality:"relaxed", sociability:"sociable", city:"Cuernavaca", phone:"777123456", status:"looking for a family", photo:"https://st.depositphotos.com/1465111/1995/i/450/depositphotos_19959663-stock-photo-lets-go-for-a-walk.jpg"},
	{petname:"Doroteo", pet:"cat", dob:"01/01/2021",size:"small", personality:"relaxed", sociability:"sociable", city:"Cuernavaca", phone:"777123456", status:"looking for a family", photo:"https://st3.depositphotos.com/15076092/18942/i/450/depositphotos_189426068-stock-photo-maine-coon-cat-looking-licking.jpg"},
	

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
