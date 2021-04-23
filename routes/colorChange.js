const express = require("express");
const router = express.Router();

const { 
  colorChangeAbortedCtrl, 
  colorChangeQuickestLongestCtrl, 
  colorChangeDurationCtrl 
} = require("../controllers/production/colorChange");

const { flexibleCtrl } = require("../controllers/flexible/flexible");
router.get("/quickest-longest/:timeRange", colorChangeQuickestLongestCtrl);
router.get("/duration/:timeRange", colorChangeDurationCtrl);
router.get("/aborted/:timeRange", colorChangeAbortedCtrl);
router.post("/", flexibleCtrl);

module.exports = router;