const router = require("express").Router();
const employeeController = require("../../controllers/employeeController");

// Matches with "/api/employee"
router.route("/")
    .get(employeeController.find)
    .post(employeeController.create);

// Matches with "/api/employee/:id",
router.route("/:id")
    .put(employeeController.update)
    .delete(employeeController.delete);

module.exports = router;