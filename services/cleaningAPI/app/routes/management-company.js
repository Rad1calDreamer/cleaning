const passport = require('passport'),
   config = require('@config'),
   models = require('@cleaning/app/setup');

module.exports = (app) => {
   const api = app.cleaningAPI.app.api.managementCompany;

   app.route('/api/v1/management-company')

      .get(passport.authenticate('jwt', config.session), api.getAll(models.User, models.ManagementCompany, app.get('cleaningsecret')));

   app.route('/api/v1/management-company/add')
      .post(passport.authenticate('jwt', config.session), api.store(models.User, models.ManagementCompany, app.get('cleaningsecret')));

   app.route('/api/v1/management-company/remove')
      .post(passport.authenticate('jwt', config.session), api.remove(models.User, models.ManagementCompany, app.get('cleaningsecret')));

   app.route('/api/v1/management-company/edit')
      .post(passport.authenticate('jwt', config.session), api.edit(models.User, models.ManagementCompany, app.get('cleaningsecret')));
};
