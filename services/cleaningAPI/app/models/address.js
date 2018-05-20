const mongoose = require('mongoose');

const Schema = mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   managementCompanyId: {
      type: String,
      required: true
   }
},
{collection: 'address'}
);
mongoose.model('Address', Schema);
