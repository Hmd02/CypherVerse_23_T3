const asyncWrapper = require("../middleware/async");
const router = require("express").Router();
const passport = require("passport");
const Customer = require("../models/customer");
const genPassword = require("../middleware/passwordUtils").genPassword;

const showHome = asyncWrapper(async (req, res) => {
	res.status(200).render("../public/customers/htmlfiles/home.ejs");
});

module.exports = {
	showHome
};
