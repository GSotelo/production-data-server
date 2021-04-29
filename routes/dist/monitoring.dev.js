"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/production/monitoring"),
    coatedSurfaceCtrl = _require.coatedSurfaceCtrl,
    conveyorSpeedCtrl = _require.conveyorSpeedCtrl,
    lineDensityCtrl = _require.lineDensityCtrl,
    runningHoursCtrl = _require.runningHoursCtrl,
    sprayModeCtrl = _require.sprayModeCtrl,
    systemStatusCtrl = _require.systemStatusCtrl;

var _require2 = require("../controllers/flexible/flexible"),
    flexibleCtrl = _require2.flexibleCtrl;

router.get("/coated-surface/:timeRange", coatedSurfaceCtrl);
router.get("/conveyor-speed/:timeRange", conveyorSpeedCtrl);
router.get("/line-density/:timeRange", lineDensityCtrl);
router.get("/running-hours/:timeRange", runningHoursCtrl);
router.get("/spray-mode/:timeRange", sprayModeCtrl);
router.get("/system-status/:timeRange", systemStatusCtrl);
router.post("/", flexibleCtrl);
module.exports = router;