/**
 * Native and third-party modules
 */
const express = require("express");
const compression = require("compression");
const path = require("path");

/**
 * Own modules
 */
const monitoringRoutes = require("./routes/monitoring");
const colorChangeRoutes = require("./routes/colorChange");
const sprayedPowderRoutes = require("./routes/sprayedPowder");
const freshPowderRoutes = require("./routes/freshPowder");
const powderTypeRoutes = require("./routes/powderType");
const electricityAirConsumptionRoutes = require("./routes/electricityAir");
const humidityTemperatureRoutes = require("./routes/humidityTemperature");
const airPressureRoutes = require("./routes/airPressure");
const reactRoutes = require("./routes/react");

const errorCtrl = require("./controllers/error/error");

/**
 * General scope
 */
const app = express();
const port = process.env.PORT || 5000;

/**
 * Serve static files
 */
app.use(express.static(path.join(__dirname, 'build')));

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
app.use("/production/monitoring", monitoringRoutes);
app.use("/production/color-change", colorChangeRoutes);
app.use("/consumption/sprayed-powder", sprayedPowderRoutes);
app.use("/consumption/fresh-powder", freshPowderRoutes);
app.use("/consumption/powder-type", powderTypeRoutes);
app.use("/consumption/electricity-air", electricityAirConsumptionRoutes);
app.use("/consumption/humidity-temperature", humidityTemperatureRoutes);
app.use("/consumption/air-pressure", airPressureRoutes);
app.use(reactRoutes);

/**
 * Gerneral error handler
 */
app.use(errorCtrl);

/**
 * Running server
 */
app.listen(port, () => console.log('Server listening on port 5000'))

/**
 * TO DO: RESTART WITH PROCESS MANAGER
 */
// process.on('uncaughtException', err => {
//   console.error('There was an uncaught error')

// })