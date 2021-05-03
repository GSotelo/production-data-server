const express = require("express");
const router = express.Router();

const { powderTypeCtrl, dropdownCtrl, totalPowderTypeCtrl } = require("../controllers/consumption/powderType");
const { flexibleCtrl } = require("../controllers/flexible/flexible");

router.get("/dropdowns/:id", dropdownCtrl);
router.get("/types/:id/:timeRange", powderTypeCtrl);
router.get("/types/all", totalPowderTypeCtrl);
router.post("/", flexibleCtrl);

module.exports = router;