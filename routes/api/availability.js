const router = require("express").Router();
const availableController = require("../../controllers/availableController");

// Matches with "/api/avail"
router.route("/")
  .get(availableController.find)
  .post(availableController.insert);

// Matches with "/api/avail/:id"
router.route("/:id")
  .get(availableController.findById)
  .put(availableController.update)
  .delete(availableController.delete);

module.exports = router;
