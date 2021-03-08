const express = require("express");
const router = express.Router();

const {
  coatedSurfaceCtrl,
  conveyorSpeedCtrl,
  flexibleCtrl,
  lineDensityCtrl,
  runningHoursCtrl,
  sprayModeCtrl,
  systemStatusCtrl
} = require("../controllers/production/production");

router.get("/:category/:startDate-:endDate", flexibleCtrl);
router.get("/coated-surface/:timeRange", coatedSurfaceCtrl);
router.get("/conveyor-speed/:timeRange", conveyorSpeedCtrl);
router.get("/line-density/:timeRange", lineDensityCtrl);
router.get("/running-hours/:timeRange", runningHoursCtrl);
router.get("/spray-mode/:timeRange", sprayModeCtrl);
router.get("/system-status/:timeRange", systemStatusCtrl);

module.exports = router;