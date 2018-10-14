const router = require("express").Router();
const productsController = require("../../controllers/productsController");

// Matches with "/api/"
router.route("/")
  .get(productsController.findAllProducts)
module.exports = router;
