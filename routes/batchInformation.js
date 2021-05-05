const express = require("express");
const router = express.Router();

const { batchInformationCtrl } = require("../controllers/production/batchInformation");

router.get("/batchs/all", batchInformationCtrl);

module.exports = router;