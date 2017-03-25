var restful = require('node-restful');

module.exports = function(app, route) {

	// setup controller for Rest
	var rest = restful.model(
		'movie',
		app.models.movie
	).methods(['get', 'put', 'post', 'delete']);

	rest.register(app, route);

	return function(req,res,next) {
		next();
	}
};