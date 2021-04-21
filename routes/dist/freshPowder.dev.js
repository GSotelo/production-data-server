"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/consumption/freshPowder"),
    totalPowderCtrl = _require.totalPowderCtrl,
    spectrumPowderCtrl = _require.spectrumPowderCtrl,
    bigbagPowderCtrl = _require.bigbagPowderCtrl;

var _require2 = require("../controllers/flexible/flexible"),
    flexibleCtrl = _require2.flexibleCtrl;

router.get("/total/:timeRange", totalPowderCtrl);
router.get("/spectrum/:timeRange", spectrumPowderCtrl);
router.get("/bigbag/:id/:timeRange", bigbagPowderCtrl);
router.post("/", flexibleCtrl);
module.exports = router;