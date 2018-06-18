const passport = require('passport'),
   config = require('@config'),
   models = require('@cleaning/app/setup');

module.exports = (app) => {
   const api = app.cleaningAPI.app.api.work;

   app.route('/api/v1/work')
      .get(passport.authenticate('jwt', config.session), api.getAll(models.User, models.Work, models.Address, models.Wiper, app.get('cleaningsecret')));

   app.route('/api/v1/work/add')
      .post(passport.authenticate('jwt', config.session), api.store(models.User, models.Work, app.get('cleaningsecret')));

   app.route('/api/v1/work/remove')
      .post(passport.authenticate('jwt', config.session), api.remove(models.User, models.Work, app.get('cleaningsecret')));

   app.route('/api/v1/work/edit')
      .post(passport.authenticate('jwt', config.session), api.edit(models.User, models.Work, models.Address, models.Wiper, app.get('cleaningsecret')));

   app.route('/api/v1/work/calculate')
      .post(passport.authenticate('jwt', config.session), api.calculate(models.User, models.Work, models.Wiper, app.get('cleaningsecret')));
};
