const express = require("express");
const router = express.Router();

const { powderTypeCtrl } = require("../controllers/consumption/powderType");
const { flexibleCtrl } = require("../controllers/flexible/flexible");

router.get("/types/:id/:timeRange", powderTypeCtrl);
router.post("/", flexibleCtrl);

module.exports = router;