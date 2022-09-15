// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = require("../utils/consts");

const Post = require("../models/Post.model");

	const postCommunity = [
		{image:"https://biotechmagazineandnews.com/wp-content/uploads/2021/12/perro-miradas-768x512.jpg",petname: "Arandano", name:"Alan", comment: `I adopted Arandano 1 year ago, we´re happy now and we like to go adventure`, adoptionDate:"02/06/2021"},
		{image:"https://ep00.epimg.net/elpais/imagenes/2020/05/08/album/1588938253_654220_1589367257_album_normal.jpg",petname: "Petunia", name:"Guillermo", comment: "I adopted Petunia 3 days ago, we´re happy now and we like to go adventure", adoptionDate:"12/08/2021"},
		{image:"https://ep00.epimg.net/elpais/imagenes/2020/05/08/album/1588938253_654220_1588939377_album_normal.jpg",petname: "Pozole", name:"Beto", comment: "I adopted Pozole 2 year ago, we´re happy now and we like to go adventure", adoptionDate:"22/01/2021"},
		{image:"https://ep00.epimg.net/elpais/imagenes/2020/05/08/album/1588938253_654220_1588939379_album_normal.jpg",petname: "Cilantro", name:"Marlon", comment: "I adopted Cilantro 5 days ago, we´re happy now and we like to go adventure", adoptionDate:"08/12/2021"},
		{image:"https://ep00.epimg.net/elpais/imagenes/2020/05/08/album/1588938253_654220_1588939380_album_normal.jpg",petname: "Piporro", name:"Alejandro", comment: "I adopted Piporro 9 weeks ago, we´re happy now and we like to go adventure", adoptionDate:"07/10/2021"}
		{image:"https://ep00.epimg.net/elpais/imagenes/2020/05/08/album/1588938253_654220_1589376789_album_normal.jpg",petname: "Ciruela", name:"Itzi", comment: "I adopted Ciruela 2 weeks ago, we´re happy now and we like to go adventure", adoptionDate:"25/08/2021"},
	]

mongoose
  .connect(MONGO_URI)
  .then((x) => {
		return Post.create(postCommunity)
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

	