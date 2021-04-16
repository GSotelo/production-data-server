"use strict";

/**
 * Native and third-party modules
 */
var express = require("express");

var compression = require("compression");

var path = require("path");
/**
 * Own modules
 */


var monitoringRoutes = require("./routes/monitoring");

var colorChangeRoutes = require("./routes/colorChange");

var sprayedPowderRoutes = require("./routes/sprayedPowder");

var freshPowderRoutes = require("./routes/freshPowder");

var powderTypeRoutes = require("./routes/powderType");

var electricityAirConsumptionRoutes = require("./routes/electricityAir");

var humidityTemperatureRoutes = require("./routes/humidityTemperature");

var airPressureRoutes = require("./routes/airPressure");

var coatmasterFlexRoutes = require("./routes/coatmasterFlex");

var reactRoutes = require("./routes/react");

var errorCtrl = require("./controllers/error/error");
/**
 * General scope
 */


var app = express();
var port = process.env.PORT || 5000;
/**
 * Serve static files
 */

app.use(express["static"](path.join(__dirname, 'build')));
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

app.use(express.urlencoded({
  extended: true
}));
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
app.use("/coatmaster/flex", coatmasterFlexRoutes);
app.use(reactRoutes);
/**
 * Gerneral error handler
 */

app.use(errorCtrl);
/**
 * Running server
 */

app.listen(port, function () {
  return console.log('Server listening on port 5000');
});
/**
 * TO DO: RESTART WITH PROCESS MANAGER
 */
// process.on('uncaughtException', err => {
//   console.error('There was an uncaught error')
// })