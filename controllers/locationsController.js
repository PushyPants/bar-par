const db = require("../database/models");

// Defining methods for the booksController
module.exports = {
  find: function(req, res) {
    db.Locations
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  }
};
 