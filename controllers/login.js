const asyncWrapper = require("../middleware/async");
const router = require("express").Router();
const passport = require("passport");
const Customer = require("../models/customer");
const genPassword = require("../middleware/passwordUtils").genPassword;

const getLoginPage = asyncWrapper(async (req, res) => {
	res.status(200).render("../public/customers/htmlfiles/login.ejs");
});

const loginCustomer = asyncWrapper(async (req, res) => {
	console.log("wooowww");
	res.status(200).render("../public/customers/htmlfiles/home.ejs");
});

const getSignUpPage = asyncWrapper(async (req, res) => {
	res.status(200).render("../public/customers/htmlfiles/signup.ejs");
});
const signUpCustomer = asyncWrapper(async (req, res) => {
	const newUser = new Customer({
		username: req.body.username,
		email: req.body.email,
		phone: req.body.phone,
		address: req.body.address,
		hash: hash,
		salt: salt
	});

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
