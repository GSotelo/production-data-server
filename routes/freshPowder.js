const express = require("express");
const router = express.Router();

const { totalPowderCtrl, spectrumPowderCtrl, bigbagPowderCtrl, dropdownCtrl } = require("../controllers/consumption/freshPowder");
const { flexibleCtrl } = require("../controllers/flexible/flexible");

router.get("/dropdowns/:id", dropdownCtrl);
router.get("/total/:timeRange", totalPowderCtrl);
router.get("/spectrum/:timeRange", spectrumPowderCtrl);
router.get("/bigbag/:id/:timeRange", bigbagPowderCtrl);
router.post("/", flexibleCtrl);

module.exports = router;