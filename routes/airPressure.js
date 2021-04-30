const express = require("express");
const router = express.Router();

const { airPressureSensorCtrl, dropdownCtrl } = require("../controllers/consumption/airPressure");
const { flexibleCtrl } = require("../controllers/flexible/flexible");

router.get("/dropdowns/:id", dropdownCtrl);
router.get("/:id/:timeRange", airPressureSensorCtrl);
router.post("/", flexibleCtrl);

module.exports = router;