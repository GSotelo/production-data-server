const express = require("express");
const router = express.Router();

const { airPressureSensorCtrl } = require("../controllers/consumption/airPressure");
const { flexibleCtrl } = require("../controllers/flexible/flexible");

router.get("/:id/:timeRange", airPressureSensorCtrl);
router.post("/", flexibleCtrl);

module.exports = router;