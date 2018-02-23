const mongoose = require('mongoose');

const Schema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},

	phone: {
		type: String,
		required: true
	},

	client_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	 },
});

mongoose.model('Wiper', Schema);