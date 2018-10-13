const db = require("../models");

// Defining methods for the booksController
module.exports = {
    
    findAllProducts: function(req, res){
      db.Products
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
    }
  };
