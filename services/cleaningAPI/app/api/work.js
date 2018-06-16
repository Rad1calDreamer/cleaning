const mongoose = require('mongoose');
const  moment = require('moment');
const ObjectId = mongoose.Types.ObjectId;

const api = {};

api.store = (User, Work, Token) => (req, res) => {
   if (Token) {
      const work = new Work({
         user_id: req.body.user_id,
         wiper: req.body.wiper,
         dateStart: req.body.dateStart,
         dateEnd: req.body.dateEnd,
         sum: req.body.sum,
         type: req.body.type,
         address: req.body.address,
      });
      work.save(error => {
         if (error) {
            return res.status(400).json(error);
         }
         res.status(200).json({ success: true, message: 'work registration successfull' });
      });
   } else {
      return res.status(403).send({ success: false, message: 'Unauthorized' });
   }
};

api.getAll = (User, Work, Address, Wiper, Token) => (req, res) => {
   if (Token) {
      Work.find({}).populate('wiper address').exec((error, list) => {
         if (error) {
            return res.status(400).json(error);
         }
         let result = [];
         result = list.map((item) =>{
            return {
               _id: item._id,
               wiper: item.wiper,
               address: item.address,
               sum: item.sum,
               type: item.type,
               dateStart: moment(item.dateStart).format('YYYY-MM-DD'),
               dateEnd: moment(item.dateEnd).format('YYYY-MM-DD')
            };
         });
         res.status(200).json(result);
         return true;
      });
   } else {
      return res.status(403).send({ success: false, message: 'Unauthorized' });
   }
};

api.remove = (User, Work, Token) => (req, res)=>{
   if (Token) {
      const id = req.body.id;
      Work.deleteOne({'_id': new ObjectId(id)}, (error, result) =>{
         if (error) {
            return res.status(400).json(error);
         }
         res.status(200).json(result);
         return true;
      });
   } else {
      return res.status(403).send({ success: false, message: 'Unauthorized' });
   }
};

api.edit = (User, Work, Address, Wiper, Token) => (req, res)=>{
   if (Token) {
      const work = {
         id: req.body._id,
         wiper: req.body.wiper,
         dateStart: moment(req.body.dateStart),
         dateEnd: moment(req.body.dateEnd),
         sum: parseInt(req.body.sum, 10),
         type: req.body.type,
         address: req.body.address,
      };

      Work.update({'_id': new ObjectId(work.id)}, work, (error) =>{

         if (error) {
            return res.status(400).json(error);
         }
         res.status(200).json({ success: true, message: 'updated' });
         return true;
      });
   } else {
      return res.status(403).send({ success: false, message: 'Unauthorized' });
   }
};

module.exports = api;
