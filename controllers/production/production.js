/**
 * Native and third-party modules
 */
const path = require("path");
const axios = require("axios");

/**
 * Own modules
 */
const readCSV = require("../../utilities/csv/readCSV");
const rootPath = require("../../utilities/rootPath/rootPath");
const wrapper = require("../../utilities/wrapper/wrapper");

/**
 * Controllers
 */
exports.runningHoursCtrl = wrapper(async (req, res, next) => {
  console.log("Production controller: Request running hours");
  const csvFile = path.join(rootPath, "csv", "color_change_duration.csv");
  const resultados = await readCSV(csvFile);
  res.send({ status: true, info: resultados })
})

exports.sprayModeCtrl = wrapper(async (req, res, next) => {
  console.log("Production controller: Spray mode");
  res.send({ status: true, messenger: "Spray mode controller" });
})

exports.systemStatusCtrl = wrapper(async (req, res, next) => {
  console.log("Production controller: System status");
  res.send({ status: true, messenger: "System status controller" });
})

exports.coatedSurfaceCtrl = wrapper((req, res, next) => {
  console.log("Production controller: Coated surface");
  res.send({ status: true, messenger: "Coated surface controller" });
})

exports.lineDensityCtrl = wrapper(async (req, res, next) => {
  console.log("Production controller: Line density");
  res.send({ status: true, messenger: "Line density controller" });
})

exports.conveyorSpeedCtrl = wrapper(async (req, res, next) => {
  console.log("Production controller: Conveyor Speed");
  res.send({ status: true, messenger: "Conveyor speed controller" });
})

exports.flexibleCtrl = wrapper(async (req, res, next) => {
  console.log("Flexible controller: Changing area");
  res.send({ status: true, messenger: "Flexible controller" });
})