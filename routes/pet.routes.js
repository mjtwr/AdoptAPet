const router = require("express").Router();
const mongoose = require("mongoose");


//Pet model
const Pet = require("../models/Pet.model");
const User = require("../models/User.model");

// Require necessary (isLoggedOut and isLoggedIn) middleware in order to control access to specific routes
// const isLoggedOut = require("../middleware/isLoggedOut");
// const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/new",(req,res)=>{
	res.render("create-pet")
});

router.get("/my-pets",(req,res)=>{
	res.render("myPets")
});

router.get("/wall",(req,res)=>{
	res.render("wall")
});

//Probablemente cambiemos quiz a otra ruta
router.get("/quiz",(req,res)=>{
	res.render("quiz")
})

module.exports = router;