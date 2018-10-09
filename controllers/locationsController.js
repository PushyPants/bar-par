const db = require("../models");

// Defining methods for the booksController
module.exports = {
  find: function(req, res) {
    db.Locations
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },

  findOneUpdateInventory: function(req, res ) {
    db.Locations.find({ location_id: req.body.location_id})
      .then(dbModel => {
        let updatedPositions = dbModel[0].positions.map((position, i) => {
          if(position.product_id === req.body.product_id){
            console.log("I am updating a value")
            position.inventories.push({
              inv_date : req.body.inv_date,
              updated_by: req.body.updated_by,
              quant: req.body.quant
            });
            return position
          }
          return position;
        });

        db.Locations.findOneAndUpdate({ location_id : req.body.location_id}, {$set:  { positions: updatedPositions }}).then(updatedLocation => {
          res.json(updatedLocation);
        });
      })
      .catch(err => res.json(err));
    }
};
 