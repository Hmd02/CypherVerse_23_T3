module.exports.isAuth = (req, res, next) => {
	if (req.isAuthenticated()) {
		console.log("hello!!!!");
		next();
	} else {
		res.redirect("/");
	}
};
