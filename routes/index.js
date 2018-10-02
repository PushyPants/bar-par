const path = require("path");
const router = require("express").Router();
// const apiRoutes = require("./api");
const drinkRoutes = require('./Drink')
// API Routes
// router.use("/api", apiRoutes);


//any route relating to Drinks
// router.use("/drink", drinkRoutes);



// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

<<<<<<< HEAD




//Mongoose routes
//create a station (mongoose Create Collection)



//get all collections



//get all Drink quantities from ONE collection



//add Drink to Collection



module.exports = router;
=======
module.exports = router;
>>>>>>> 66a29db42d8244ad5279c57753b1a8ca48822478
