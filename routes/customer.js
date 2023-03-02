const express = require("express");
const router = express.Router();

const { showHome } = require("../controllers/customer.js");

router.route("/").get(showHome);

module.exports = router;
