const router = require("express").Router();
const employeeController = require("../../controllers/employeeController");
const passport = require('passport')

// Matches with "/api/employee"
router
  .route("/")
  .get(employeeController.find)
  .post(employeeController.create);

// Matches with "/api/employee/:id",
router
  .route("/:id")
  .get(employeeController.findOne)
  .put(employeeController.update)
  .delete(employeeController.delete);

//  Route to delete reference to Availability
router.route("/del/:id")
    .put(employeeController.updateAvail);

router.post(
  "/login",
  function(req, res, next) {
    console.log("routes/user.js, login, req.body: ");
    console.log(req.body);
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    console.log("logged in", req.user);
    var userInfo = {
      username: req.user.username
    };
    res.send(userInfo);
  }
);

module.exports = router;
