const router = require("express").Router();
const locationsController = require("../../controllers/locationsController");

// Matches with "/api/locations"
router.route("/")
  .get(locationsController.findAll)
  //.post(locationsController.insert);

// Matches with "/api/locations/:id"
// router.route("/:id")
//   .get(locationsController.findById)
//   .put(locationsController.update)
//   .delete(locationsController.delete);
router.route('/updatelocation')
  .put(locationsController.updateItemAtLocation)


  //matches with api/itemlookup/<product_id>
router.route('/itemlookup/:id')
  .put(locationsController.lookupSingleItem)

router.route('/getSingleStation/:id')
  .get(locationsController.getSingleStation)

module.exports = router;
