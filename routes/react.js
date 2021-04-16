const express = require("express");
const router = express.Router();

const { serveReactBundle } = require("../controllers/react/react");

router.get("/*", serveReactBundle);

module.exports = router;