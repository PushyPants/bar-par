const db = require("../database/models");

// Defining methods for the booksController
module.exports = {
    
    findAllProducts: function(req, res){
      db.Products
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
    }
  };
