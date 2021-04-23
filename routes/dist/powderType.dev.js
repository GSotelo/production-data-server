"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/consumption/powderType"),
    powderTypeCtrl = _require.powderTypeCtrl;

var _require2 = require("../controllers/flexible/flexible"),
    flexibleCtrl = _require2.flexibleCtrl;

router.get("/types/:id/:timeRange", powderTypeCtrl);
router.post("/", flexibleCtrl);
module.exports = router;