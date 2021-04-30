const express = require("express");
const router = express.Router();

const { sprayedPowderTotalCtrl, sprayedPowderRecipeCtrl, dropdownCtrl } = require("../controllers/consumption/sprayedPowder");
const { flexibleCtrl } = require("../controllers/flexible/flexible");

router.get("/dropdowns/:id", dropdownCtrl);
router.get("/total/:timeRange", sprayedPowderTotalCtrl);
router.get("/recipes/:id/:timeRange", sprayedPowderRecipeCtrl);
router.post("/", flexibleCtrl);


module.exports = router;