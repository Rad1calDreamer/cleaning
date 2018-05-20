const mongoose = require('mongoose');
const  ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   managementCompany: {
      type: ObjectId,
      required: false,
      ref: 'management-company'
   }
},
{collection: 'address'}
);
mongoose.model('Address', Schema);
