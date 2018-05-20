const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const api = {};

api.store = (User, Address, Token) => (req, res) => {
   if (Token) {
      const address = new Address({
         user_id: req.body.user_id,
         name: req.body.name
      });

      address.save(error => {
         if (error) {
            return res.status(400).json(error);
         }
         res.status(200).json({ success: true, message: 'address registration successfull' });
      });
   } else {
      return res.status(403).send({ success: false, message: 'Unauthorized' });
   }
};

api.getAll = (User, Address, Token) => (req, res) => {
   if (Token) {
      Address.find({}, (error, list) => {
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

api.remove = (User, Address, Token) => (req, res)=>{
   if (Token) {
      const id = req.body.id;
      Address.deleteOne({'_id': new ObjectId(id)}, (error, result) =>{
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

api.edit = (User, Address, Token) => (req, res)=>{
   if (Token) {
      const address = {
         id: req.body._id,
         name: req.body.name,
         managementCompanyId: req.body.managementCompanyId,
      };
      Address.update({'_id': new ObjectId(address.id)}, address, (error) =>{
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
