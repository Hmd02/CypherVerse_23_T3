const errorHandler = (err, req, res, next) => {
	console.log("lawdaaaaaaaaaaaaaaaaaa");

	res.locals.error = err;
	const status = err.status || 500;
	res.status(status);
	res.render("error");
	return res.status(err.status).json({ msg: err });
};

module.exports = errorHandler;
