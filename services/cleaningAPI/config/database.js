module.exports = (mongoose, config) => {
	const database = mongoose.connection;
	mongoose.Promise = Promise;
	mongoose.connect(config.database, {
		useMongoClient: true,
		promiseLibrary: global.Promise
	});
	database.on('error', error => console.log(`Connection to cleaning database failed: ${error}`));
	database.on('connected', () => console.log('Connected to cleaning database'));
	database.on('disconnected', () => console.log('Disconnected from cleaning database'));
	process.on('SIGINT', () => {
		database.close(() => {
			console.log('cleaning terminated, connection closed');
			process.exit(0);
		})
	});
};