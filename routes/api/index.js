const router = require("express").Router();
const availRoutes = require("./availability");
const employeeRoutes = require("./employee");
const shiftRoutes = require("./shift");
const locationRoutes = require("./locations");
const productRoutes = require("./products");

// Book routes
router.use("/avail", availRoutes);
router.use("/employee", employeeRoutes);
router.use("/shift", shiftRoutes);
router.use("/locations", locationRoutes);
router.use("/products", productRoutes);

module.exports = router;
