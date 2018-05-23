const mongoose = require('mongoose');
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
         res.status(200).json(list);
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

api.edit = (User, Work, Token) => (req, res)=>{
   if (Token) {
      const address = {
         id: req.body._id,
         name: req.body.name,
         managementCompany: req.body.managementCompany,
      };
      Work.update({'_id': new ObjectId(address.id)}, address, (error) =>{
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
