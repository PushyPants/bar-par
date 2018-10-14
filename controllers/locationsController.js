const db = require("../database/models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Locations
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },

  updateItemAtLocation: function(req, res ) {
    db.Locations.find({ location_id: req.body.location_id})
      .then(dbModel => {
        let updatedPositions = dbModel[0].positions.map((position, i) => {
          if(position.product_id === req.body.product_id){
            position.inventories.push({
              inv_date : req.body.inv_date,
              updated_by: req.body.updated_by,
              quant: (req.body.quant * 1000) //take percentage (decimal pt) and turn to ML
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
    },

  //looks up a single item by it's product_id and the date of inventory (displays in liters)
  lookupSingleItem: function(req, res ) {
    const invArr = [];
    db.Locations.find({})
      .then(data => {
        data.forEach(item => {
          item.positions.map((position, i) => {
            if(position.product_id === req.params.id) {
             position.inventories.map(inv => {
              if (inv.inv_date === req.body.inv_date) {
                invArr.push(inv.quant)
              }
             })
            }
          })
        })
        console.log(invArr)
        const itemTotal = invArr.reduce((x,y) => {
          x = parseInt(x);
          y = parseInt(y);

          return x + y
        }) / 1000; //divide by 1000 to show total in Liters
        console.log (itemTotal)
        res.json(itemTotal)
      })
      .catch(err => res.json(err));
    },

    getSingleStation: function (req, res) {
      let combinedData = {};
      db.Locations.findOne({location_id: req.params.id})
      .then( sData => {
        combinedData = sData;
        combinedData.positions.map((position, idx) => {
          db.Products.find({_id : position.product_id})
          .then((pData) => {
           combinedData.positions[idx].product_info = pData;
          })
          .catch(err=> res.json(err))
        })
        //we know this isn't the right way to do this but its working for now. 
        setTimeout(() => {res.json(combinedData)},1000)
        
      }).catch(err => res.json(err))
    }
  
  };
 