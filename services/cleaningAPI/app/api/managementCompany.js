const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const api = {};

api.store = (User, ManagementCompany, Token) => (req, res) => {
   if (Token) {
      const company = new ManagementCompany({
         user_id: req.body.user_id,
         name: req.body.name
      });

      company.save(error => {
         if (error) {
            return res.status(400).json(error);
         }
         res.status(200).json({ success: true, message: 'Client registration successfull' });
      });
   } else {
      return res.status(403).send({ success: false, message: 'Unauthorized' });
   }
};

api.getAll = (User, ManagementCompany, Token) => (req, res) => {
   if (Token) {
      ManagementCompany.find({}, (error, list) => {
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

api.remove = (User, ManagementCompany, Token) => (req, res)=>{
   if (Token) {
      const id = req.body.id;
      ManagementCompany.deleteOne({'_id': new ObjectId(id)}, (error, result) =>{
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

api.edit = (User, ManagementCompany, Token) => (req, res)=>{
   if (Token) {
      const wiper = {
         id: req.body._id,
         name: req.body.name
      };
      ManagementCompany.update({'_id': new ObjectId(wiper.id)}, wiper, (error) =>{
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
