const router = require("express").Router();
const mongoose = require("mongoose");
const fileUploader = require("../config/cloudinary.config");


//MODELS
const Pet = require("../models/Pet.model");
const User = require("../models/User.model");
const Post = require("../models/Post.model");

//MIDDLEWARES
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");


//CREATE PET - NEW PET FOR ADOPTION
router.get("/new",isLoggedIn,(req,res)=>{
	res.render("create-pet",req.session.user)
});

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
		})
		.catch((err)=> console.log(err))
		// .catch ((err)=> if (!username) {
		// 	return res
		// 	  .status(400)
		// 	  .render("auth/login", { errorMessage: "Please provide petname." });
		//   })
	
}) 

//MY PETS - VIEW MY PETS FOR ADOPTION
router.get("/my-pets",isLoggedIn,(req,res)=>{

	User.findById(req.session.user._id, "pets")
	.populate("pets")
	.then((result) => {
		res.render("myPets", {pets : result.pets, email: req?.session?.user});
	})
	.catch ((err) => console.log(err))
});

//MY PETS - PET DETAILS
router.get("/my-pets/:id", isLoggedIn,(req, res)=>{
	 Pet.findById(req.params.id)
	 .populate("user", "firstName lastName phone city ")
	 .then((pet)=>{
		//console.log(pet)
		res.render("petdetails", pet)
		}) 	
})
//EDIT MY PETS - PET DETAILS
router.get("/my-pets/:id/edit", (req,res) =>{
	const {id} = req.params
	Pet.findById(id)
	.then(pet=>{
		console.log("EDITTT--->", pet)
		res.render("editPet", pet);
		}) 
	.catch ((err) => console.log(err))
});

router.post("/my-pets/:id/edit", fileUploader.single("image"),(req,res, next) =>{
	const {id} = req.params
	console.log(id)
	const {petname, dob, pet, size, sociability, personality, status, ...rest} = req.body
	console.log("REST", req.body)
	Pet.findByIdAndUpdate(id,{petname, dob, pet, size, sociability, personality, status, image: req.file.path}, {new: true})
	//console.log("REQ BODY=======>", req.body)
	.then(result =>{
		console.log("EDITADO", result)
		res.redirect(`/pet/my-pets/${req.params.id}`); 
	})
	.catch((err) => console.log(err))
});
//DELETE -PET MY PETS
router.post("/my-pets/:id/delete", (req,res)=>{
	const {id} = req.params
	 //console.log(req.params)
	Pet.findByIdAndDelete(id)
	.then(result =>{
		console.log("DELETEEEEEE------->",result)
		res.redirect("/pet/my-pets")
	})
	.catch((err)=> console.log(err))
})

//WALL OF PETS

router.get("/wall",(req,res)=>{
	Pet.find().then((pets)=>{
		//console.log(pets)
		res.render("wall", {pets : pets});
	})
});

//WALL OF PETS - PETDETAILS
router.get("/wall/:id", isLoggedIn,(req, res)=>{
	Pet.findById(req.params.id)
	.populate("user", "firstName lastName phone city ")
	.then((pet)=>{
	  // console.log(pet)
	   res.render("petdetails", pet)
	   }) 	
})



//QUIZ - MATCH PETS

router.get("/quiz",isLoggedIn,(req,res)=>{
		res.render("quiz",req.session.user);
	});

	router.get("/quiz-results",isLoggedIn,(req,res)=>{
		res.render("quizResults",req.session.user);
	});

	router.get("/quiz-no-matches",isLoggedIn,(req,res)=>{
		res.render("noMatches",req.session.user);
	});

router.post("/quiz" ,(req,res, next) =>{
	const {pet, size,personality, sociability} = req.body
	//console.log(req.body)
	Pet.find({pet, size,personality, sociability, status: "looking for a family"})
	.then((result)=>{
		console.log("RESULT QUIZ--->", result)
		if(result.length == 0){
			 res.render("noMatches")
		}else{ 
			res.render("quizResults", {pets : result});
		}

	}) . catch((err) => console.log(err))
	
})


//OUR COMMUNITY - POSTS
router.get("/post",isLoggedIn,(req,res)=>{
	res.render("createPost", req.session.user)
});

router.get("/community",isLoggedIn,(req,res)=>{
	Post.find({user: req.session.user._id})
	.populate("user", "firstName city")
	.then((result) => {
		 //console.log(result)
		res.render("community", {postCommunity : result});
	})
	.catch ((err) => console.log(err))
});


router.post("/post", isLoggedIn,fileUploader.single("image"), (req,res, next) =>{
	const {petname,name, comment, image, adoptionDate} = req.body
	//console.log(req.body)
	Post.create({petname,name, comment, image: req.file.path, user: req.session.user._id, adoptionDate})
	.then((result)=>{
		//console.log("RESULT---------->:",result)
		User.findByIdAndUpdate(req.session.user._id, { $push: {posts: result._id}})
		.then(()=>{
			res.redirect("/pet/community")
		})
	}) . catch((err) => console.log(err))
})


module.exports = router;