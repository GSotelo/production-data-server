const express = require("express");
const router = express.Router();

const { sprayedPowderTotalCtrl, sprayedPowderRecipeCtrl } = require("../controllers/consumption/sprayedPowder");
const { flexibleCtrl } = require("../controllers/flexible/flexible");

router.get("/total/:timeRange", sprayedPowderTotalCtrl);
router.get("/recipe/:timeRange", sprayedPowderRecipeCtrl);
router.post("/", flexibleCtrl);

module.exports = router;