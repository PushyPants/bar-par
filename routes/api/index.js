const router = require("express").Router();
const availRoutes = require("./availability");
const employeeRoutes = require("./employee");
const shiftRoutes = require("./shift");

// Book routes
router.use("/avail", availRoutes);
router.use("/employee", employeeRoutes);
router.use("/shift", shiftRoutes);

module.exports = router;
