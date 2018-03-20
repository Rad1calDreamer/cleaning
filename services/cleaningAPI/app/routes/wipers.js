const passport = require('passport'),
   config = require('@config'),
   models = require('@cleaning/app/setup');

module.exports = (app) => {
   const api = app.cleaningAPI.app.api.wiper;

   app.route('/api/v1/wipers')

   // .post(passport.authenticate('jwt', config.session), api.store(models.User, models.Wiper, app.get('cleaningsecret')))
      .get(passport.authenticate('jwt', config.session), api.getAll(models.User, models.Wiper, app.get('cleaningsecret')));

   app.route('/api/v1/wipers/add')
      .post(passport.authenticate('jwt', config.session), api.store(models.User, models.Wiper, app.get('cleaningsecret')))
      // .get(passport.authenticate('jwt', config.session), api.getAll(models.User, models.Wiper, app.get('cleaningsecret')));

   app.route('/api/v1/wipers/remove')
      .post(passport.authenticate('jwt', config.session), api.remove(models.User, models.Wiper, app.get('cleaningsecret')))
   // .get(passport.authenticate('jwt', config.session), api.getAll(models.User, models.Wiper, app.get('cleaningsecret')));
};
