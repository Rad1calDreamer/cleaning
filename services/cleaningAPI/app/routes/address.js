const passport = require("passport"),
  config = require("@config"),
  models = require("@cleaning/app/setup");

module.exports = app => {
  const api = app.cleaningAPI.app.api.address;

  app
    .route("/api/v1/address")

    .get(
      passport.authenticate("jwt", config.session),
      api.getAll(models.User, models.Address, app.get("cleaningsecret"))
    );

  app
    .route("/api/v1/address/add")
    .post(
      passport.authenticate("jwt", config.session),
      api.store(models.User, models.Address, app.get("cleaningsecret"))
    );

  app
    .route("/api/v1/address/remove")
    .post(
      passport.authenticate("jwt", config.session),
      api.remove(models.User, models.Address, app.get("cleaningsecret"))
    );

  app
    .route("/api/v1/address/edit")
    .post(
      passport.authenticate("jwt", config.session),
      api.edit(models.User, models.Address, app.get("cleaningsecret"))
    );
};
