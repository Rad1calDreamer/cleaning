const models = require('@cleaning/app/setup');

module.exports = (app) => {
	const api = app.cleaningAPI.app.api.user;

	app.route('/api/v1/signup')
		.post(api.signup(models.User, models.User));
}