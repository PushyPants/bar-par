const db = require("../database/models");

// Defining methods for the booksController
module.exports = {
  find: function(req, res) {
    db.Availability
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  findById: function(req, res){
    db.Availability
      .find({Employee : req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err))
  },
  delete: function(req, res) {
    db.Availability.remove({
      _id:req.params.id
    }).then(dbModel => res.json(dbModel))
    .catch(err => res.json(err))
  },
  insert: function(req, res) {
    db.Availability.create(req.body)
      .then(dbModel =>res.json(dbModel))
      .catch(err => res.json(err));
  },
  update: function(req, res){
    db.Availability.findOneAndUpdate(
      {_id:req.params.id},
      req.body)
      .then(dbModel =>res.json(dbModel))
    .catch(err => res.json(err))}
};
 