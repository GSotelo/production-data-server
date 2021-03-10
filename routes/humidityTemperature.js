const express = require("express");
const router = express.Router();

const { temperatureSensorCtrl, humiditySensorCtrl } = require("../controllers/consumption/humidityTemperature");
const { flexibleCtrl } = require("../controllers/flexible/flexible");

router.get("/temperature/:id/:timeRange", temperatureSensorCtrl);
router.get("/humidity/:id/:timeRange", humiditySensorCtrl);
router.post("/", flexibleCtrl);

module.exports = router;