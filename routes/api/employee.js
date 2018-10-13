const router = require("express").Router();
const employeeController = require("../../controllers/employeeController");
const passport = require("../../passport")

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
    console.log("routes/employee.js, login, req.body: ");
    console.log(req.body);
    next();
    console.log("Halp1")
  },

    passport.authenticate("local")
    ,
  (req, res) => {
    console.log("logged in", req.user);
    var userInfo = 
      req.user;
    res.send(userInfo);
  }
);

router.get('/login', (req, res, next) => {
  console.log('===== user!!======')
  console.log(req.user)
  if (req.user) {
      res.json({ user: req.user })
  } else {
      res.json({ user: null })
  }
})

router.post('/logout', (req, res) => {
  if (req.user) {
      req.logout()
      res.send({ msg: 'logging out' })
  } else {
      res.send({ msg: 'no user to log out' })
  }
});
module.exports = router;
