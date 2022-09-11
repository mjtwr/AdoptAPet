const router = require("express").Router();
const mongoose = require("mongoose");


//Pet model
const Pet = require("../models/Pet.model");
const User = require("../models/User.model");



router.get("/new",(req,res)=>{
	res.render("create-pet")
});

router.post("/new", (req, res, next)=>{
	const {petname, pet, dob, size, personality, sociability, city, name, phone, status} = req.body
	return Pet.create({
		petname, pet, dob, size, personality, sociability, city, name, phone, status
	})
	console.log("PETS====", req.body)

}) 


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