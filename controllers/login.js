const asyncWrapper = require("../middleware/async");
const router = require("express").Router();
const passport = require("passport");
const Customer = require("../models/customer");
const genPassword = require("../middleware/passwordUtils").genPassword;

const getLoginPage = asyncWrapper(async (req, res) => {
	res.status(200).render("../public/customers/htmlfiles/login.ejs");
});

const loginCustomer = async (req, res, next) => {
	try {
		res.status(200).redirect("/customer");
	} catch (error) {
		console.log(error);
		res.redirect("/");
	}
};

const getSignUpPage = asyncWrapper(async (req, res) => {
	res.status(200).render("../public/customers/htmlfiles/signup.ejs");
});
const signUpCustomer = asyncWrapper(async (req, res) => {
	console.log("helloooo");
	const newUser = new Customer({
		username: req.body.username,
		email: req.body.email,
		phone: req.body.phone,
		address: req.body.address,
		hash: hash,
		salt: salt
	});
	console.log(newUser);
	newUser.save().then((user) => {
		console.log(user);
	});

	res.redirect("/customer");
});
module.exports = {
	getLoginPage,
	getSignUpPage,
	signUpCustomer,
	loginCustomer
};
