/**
 * Own modules
 */
const wrapper = require("../../utilities/wrapper/wrapper");
const { filterDataFromFile } = require("../../utilities/csv/filter");

/**
 * Controllers
 */
exports.electricityConsumptionCtrl = wrapper(async (req, res, next) => {
  console.log("[electricityConsumptionCtrl]: Electricity comsumption");
  const timeRange = req.params.timeRange;
  const id = req.params.id;
  let filteredData = [];

  // Read, parse and filter csv file based on given time range
  if (id === "p1") filteredData = await filterDataFromFile("consumption_electricity_p1.csv", timeRange)
  if (id === "p2") filteredData = await filterDataFromFile("consumption_electricity_p2.csv", timeRange)

  res.send(filteredData);
});

exports.airConsumptionCtrl = wrapper(async (req, res, next) => {
  console.log("[airConsumptionCtrl]: Air comsumption");
  const timeRange = req.params.timeRange;
  const id = req.params.id;
  let filteredData = [];

  // Read, parse and filter csv file based on given time range
  if (id === "p1") filteredData = await filterDataFromFile("consumption_air_p1.csv", timeRange)
  if (id === "p2") filteredData = await filterDataFromFile("consumption_air_p2.csv", timeRange)

  res.send(filteredData);
});
