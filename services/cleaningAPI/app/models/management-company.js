const mongoose = require('mongoose');

const Schema = mongoose.Schema({
      name: {
         type: String,
         required: true
      },
      address: [{}]
   },
   {collection: 'management-company'}
);
mongoose.model('management-company', Schema);