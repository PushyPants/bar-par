const db = require("../models");

// Defining methods for the booksController
module.exports = {
  find: function(req, res) {
    db.Locations
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  }
};
 