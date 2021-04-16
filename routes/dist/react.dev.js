"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/react/react"),
    serveReactBundle = _require.serveReactBundle;

router.get("/*", serveReactBundle);
module.exports = router;