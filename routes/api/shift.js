const router = require("express").Router();
const shiftController = require("../../controllers/shiftController");

// Matches with "/api/shift"
router.route("/")
    .get(shiftController.find)
    .post(shiftController.insert);

// Matches with "/api/shift/:id"
router.route("/:id")
    .put(shiftController.update)
    .delete(shiftController.delete);

module.exports = router;