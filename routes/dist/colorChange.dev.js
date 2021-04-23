"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/production/colorChange"),
    colorChangeAbortedCtrl = _require.colorChangeAbortedCtrl,
    colorChangeQuickestLongestCtrl = _require.colorChangeQuickestLongestCtrl,
    colorChangeDurationCtrl = _require.colorChangeDurationCtrl;

var _require2 = require("../controllers/flexible/flexible"),
    flexibleCtrl = _require2.flexibleCtrl;

router.get("/quickest-longest/:timeRange", colorChangeQuickestLongestCtrl);
router.get("/duration/:timeRange", colorChangeDurationCtrl);
router.get("/aborted/:timeRange", colorChangeAbortedCtrl);
router.post("/", flexibleCtrl);
module.exports = router;