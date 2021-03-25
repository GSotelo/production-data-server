/**
 * Native and third-party modules
 */
const express = require("express");

/**
 * Own modules
 */
const { coatmasterFlexCtrl } = require("../controllers/coatmaster/flex/coatmasterFlex");

/**
 * Router
 */
const router = express.Router();
router.get("/data", coatmasterFlexCtrl);
module.exports = router;