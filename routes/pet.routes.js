const router = require("express").Router();
const mongoose = require("mongoose");
const fileUploader = require("../config/cloudinary.config");


//Pet model
const Pet = require("../models/Pet.model");
const User = require("../models/User.model");
const Post = require("../models/Post.model");

const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");



router.get("/new",isLoggedIn,(req,res)=>{
	res.render("create-pet",req.session.user)
});


//form
router.post("/new", isLoggedIn, fileUploader.single("image"),(req, res, next)=>{
	const {petname, pet, dob, size, personality, sociability,city, image, name,phone,status} = req.body
	//console.log("PETS====", req.body)
	//console.log("IMAGE--->>>>", req.file) 
	Pet.create({
		petname, pet, dob, size, personality, sociability,user: req.session.user._id, image:req.file.path, city,name,phone,status
	}).then((result)=>{
		// console.log("USERID", req.session.user._id)
		// console.log(result)
		User.findByIdAndUpdate(req.session.user._id, { $push: { pets: result._id }})
		.then(()=>{
			res.redirect("/pet/my-pets")
		})
		}).catch ((err)=> console.log(err))
	
}) 

//View My Pets in Adoption
router.get("/my-pets",isLoggedIn,(req,res)=>{

	User.findById(req.session.user._id, "pets")
	.populate("pets")
	.then((result) => {
		res.render("myPets", {pets : result.pets});
	})
	.catch ((err) => console.log(err))
});

//view pet details
router.get("/my-pets/:id", isLoggedIn,(req, res)=>{
	 Pet.findById(req.params.id).then((pet)=>{
		//console.log(req.params.id)
		res.render("petdetails", pet)
		}) 	
})
//Edit petdetails
router.get("/my-pets/:id/edit", (req,res) =>{
	Pet.findById(req.params.id).then((pet)=>{
		res.render("editPet", pet);
		}) 
})
router.post("/my-pets/:id/edit", (req,res) =>{
	Pet.findByIdAndUpdate(req.params.id, req.body, {new: true})
	console.log("REQ BODY=======>", req.body)
	.then((result) =>{
		res.redirect(`/my-pets/${req.params.id}`);
	})
});
//WALL OF ADOPTION

router.get("/wall/:id", (req, res)=>{
	Pet.findById(req.params.id).then((pet)=>{
	// console.log(req.params.id)
	 res.render("petdetails", pet)
	 }) 	
})

router.get("/wall",(req,res)=>{
	Pet.find().then((pets)=>{
		//console.log(pets)
		res.render("../views/wall", {pets : pets});
	})
});

//Quiz
//router.post

router.get("/quiz",isLoggedIn,(req,res)=>{
		res.render("../views/quiz",req.session.user);
	});

	router.get("/quiz-results",isLoggedIn,(req,res)=>{
		res.render("../views/quizResults", req.session.user);
	});



router.post("/quiz",fileUploader.single("image") ,(req,res, next) =>{
	const {pet, size,personality, sociability} = req.body
	//console.log(req.body)
	Post.create({pet, size,personality, sociability})
	.then((result)=>{
		res.redirect("/pet/quiz-results")
	}) . catch((err) => console.log(err))
})


//POSTS - OUR COMMUNITY
router.get("/post",isLoggedIn,(req,res)=>{
	res.render("createPost", req.session.user)
});

router.get("/community",isLoggedIn,(req,res)=>{

	Post.findById(req.session.user._id, "posts")
	.populate("posts")
	.then((result) => {
		//console.log(result)
		res.render("community", {posts : result.posts});
	})
	.catch ((err) => console.log(err))
});


router.post("/post", isLoggedIn,fileUploader.single("image"), (req,res, next) =>{
	const {petname,name, comment, image, adoptionDate} = req.body
	//console.log(req.body)
	Post.create({petname,name, comment, image: req.file.path, user: req.session.user._id, adoptionDate})
	.then((result)=>{
		User.findByIdAndUpdate(req.session.user._id, { $push: {posts: result._id}})
		.then(() =>{
		res.redirect("/pet/community")
		})
	}) . catch((err) => console.log(err))
})


module.exports = router;