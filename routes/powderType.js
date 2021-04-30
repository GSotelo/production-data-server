const express = require("express");
const router = express.Router();

const { powderTypeCtrl, dropdownCtrl } = require("../controllers/consumption/powderType");
const { flexibleCtrl } = require("../controllers/flexible/flexible");

router.get("/dropdowns/:id", dropdownCtrl);
router.get("/types/:id/:timeRange", powderTypeCtrl);
router.post("/", flexibleCtrl);

module.exports = router;