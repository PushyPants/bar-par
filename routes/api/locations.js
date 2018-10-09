const router = require("express").Router();
const locationsController = require("../../controllers/locationsController");

// Matches with "/api/locations"
router.route("/")
  .get(locationsController.find)
  //.post(locationsController.insert);

// Matches with "/api/locations/:id"
// router.route("/:id")
//   .get(locationsController.findById)
//   .put(locationsController.update)
//   .delete(locationsController.delete);
router.route('/updatelocation')
  .put(locationsController.findOneUpdateInventory)


module.exports = router;
