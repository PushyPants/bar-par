const router = require("express").Router();
const employeeController = require("../../controllers/employeeController");

// Matches with "/api/employee"
router.route("/")
    .get(employeeController.find)
    .post(employeeController.create)
    
    // Matches with "/api/employee/:id",
    router.route("/:id")
    .get(employeeController.findOne)
    .put(employeeController.update)
    .delete(employeeController.delete);

//  Route to delete reference to Availability
router.route("/del/:id")
    .put(employeeController.updateAvail)

module.exports = router;