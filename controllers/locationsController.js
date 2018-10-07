const db = require("../models");

// Defining methods for the booksController
module.exports = {
  //finds everything location in bar with respective products and quanitities
  find: function(req, res) {
    db.Locations
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  }
};
 