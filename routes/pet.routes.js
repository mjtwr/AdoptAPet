const router = require("express").Router();
const mongoose = require("mongoose");


//Pet model
const Pet = require("../models/Pet.model");
const User = require("../models/User.model");



router.get("/new",(req,res)=>{
	res.render("create-pet")
});

router.post("/new", (req, res)=>{
	const {name, pet, dateOfBirth, size, personality, sociability, city, contact, adopted} = req.body
	console.log("PETS====", req.body)
	return Pet.create({
		name, pet, dateOfBirth, size, personality, sociability, city, contact, adopted	
	})
}) 
// .then(()=>{
// 	res.redirect("../views/myPets.hbs")
// }).catch((err) => {(err)})

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