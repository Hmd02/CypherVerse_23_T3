const express = require("express");
const router = express.Router();

const {
	getLoginPage,
	getSignUpPage,
	signUpCustomer,
	loginCustomer
} = require("../controllers/login");

router.route("/").get(getLoginPage).post(loginCustomer);
router.route("/signup").get(getSignUpPage).post(signUpCustomer);

module.exports = router;
