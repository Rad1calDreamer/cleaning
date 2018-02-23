const mongoose = require('mongoose');

const Schema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},

	managmentCompany_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'managementCompany'
	}
});

mongoose.model('Address', Schema);