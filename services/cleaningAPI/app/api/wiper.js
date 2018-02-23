const mongoose = require('mongoose');

const api = {};

api.store = (User, Wiper, Token) => (req, res) => {
  if (Token) {
    const wiper = new Wiper({
      user_id: req.body.user_id,
      name: req.body.name,
      phone: req.body.phone
    });

    wiper.save(error => {
      if (error) return res.status(400).json(error);
      res.status(200).json({ success: true, message: "Client registration successfull" });
    })
  } else return res.status(403).send({ success: false, message: 'Unauthorized' });
}

api.getAll = (User, Wiper, Token) => (req, res) => {
  console.log(req);
  if (Token) {
	Wiper.find({}, (error, wiper) => {
      if (error) return res.status(400).json(error);
      res.status(200).json(wiper);
      return true;
    })
  } else return res.status(403).send({ success: false, message: 'Unauthorized' });
}

module.exports = api;