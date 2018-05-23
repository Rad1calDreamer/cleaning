const mongoose = require('mongoose');
const  ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = new mongoose.Schema({
   address: {
      type: ObjectId,
      required: true,
      ref: 'Address'
   },
   wiper: {
      type: ObjectId,
      required: true,
      ref: 'Wiper'
   },
   dateStart: {
      type: Date,
      required: true,
   },
   dateEnd: {
      type: Date,
      required: true,
   },
   type: {
      type: String,
      required: true
   },
   sum: {
      type: Number,
      required: true
   }
},
{collection: 'works'}
);
mongoose.model('Work', Schema);
