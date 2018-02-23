const models = require('@cleaning/app/setup');
module.exports = (app) => {
	const api = app.cleaningAPI.app.api.auth;
	app.route('/')
		.get((req, res) => res.send('cleaning Manager API'));
	app.route('/api/v1/auth')
		.post(api.login(models.User));
}