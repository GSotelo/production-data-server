/**
 * Native and third-party modules
 */
const express = require("express");
const compression = require("compression");

/**
 * Own modules
 */
const productionRoutes = require("./routes/production");
const errorCtrl = require("./controllers/error/error");

/**
 * General scope
 */
const app = express();
const port = process.env.PORT || 5000;

/**
 * Compress response bodies
 */
app.use(compression());

/**
 * Parse incoming requests with JSON payload
 */
app.use(express.json());

/**
 * Parse incoming requests with urlencoded bodies
 */
app.use(express.urlencoded({ extended: true }));

/**
 * Routes
 */
app.use("/production/categories", productionRoutes);

/**
 * Gerneral error handler
 */
app.use(errorCtrl);

/**
 * Running server
 */
app.listen(port, () => console.log('Server listening on port 5000'))