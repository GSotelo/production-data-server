const express = require("express");
const router = express.Router();

const { electricityConsumptionCtrl, airConsumptionCtrl } = require("../controllers/consumption/electricityAir");
const { flexibleCtrl } = require("../controllers/flexible/flexible");

router.get("/electricity/:id/:timeRange", electricityConsumptionCtrl);
router.get("/air/:id/:timeRange", airConsumptionCtrl);
router.post("/", flexibleCtrl);

module.exports = router;