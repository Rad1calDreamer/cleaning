const mongoose = require('mongoose'),
	UserModel = require('@cleaningModels/user'),
	WiperModel = require('@cleaningModels/wiper'),
	ManagementCompanyModel = require('@cleaningModels/management-company'),
	AddressModel = require('@cleaningModels/address');

const models = {
	User: mongoose.model('User'),
	Wiper: mongoose.model('Wiper'),
	Address: mongoose.model('Address'),
	ManagementCompany: mongoose.model('management-company')
}

module.exports = models;