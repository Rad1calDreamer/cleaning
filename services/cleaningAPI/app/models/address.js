const mongoose = require('mongoose');
const  ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema({
   name: {
      type: String,
      required: true
   },
      floorCount: {
      type: Number,
      required: true
   },
   porch: {
      type: Number,
      required: true
   },
   elevator: {
      type: Boolean,
      required: true
   },
   houseSquare: {
      type: Number,
      required: true
   },
   nearSquare: {
      type: Number,
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
