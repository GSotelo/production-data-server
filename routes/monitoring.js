const express = require("express");
const router = express.Router();

const {
  coatedSurfaceCtrl,
  conveyorSpeedCtrl,
  lineDensityCtrl,
  runningHoursCtrl,
  sprayModeCtrl,
  systemStatusCtrl,
  coatedPartsCtrl
} = require("../controllers/production/monitoring");

const { flexibleCtrl } = require("../controllers/flexible/flexible");

router.get("/coated-surface/:timeRange", coatedSurfaceCtrl);
router.get("/conveyor-speed/:timeRange", conveyorSpeedCtrl);
router.get("/line-density/:timeRange", lineDensityCtrl);
router.get("/running-hours/:timeRange", runningHoursCtrl);
router.get("/spray-mode/:timeRange", sprayModeCtrl);
router.get("/system-status/:timeRange", systemStatusCtrl);
router.get("/coated-parts/:timeRange", coatedPartsCtrl);
router.post("/", flexibleCtrl);

module.exports = router;