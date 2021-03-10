/**
 * Own modules
 */
const wrapper = require("../../utilities/wrapper/wrapper");
const { filterDataFromFile } = require("../../utilities/csv/filter");

/**
 * Controllers
 */
exports.airPressureSensorCtrl = wrapper(async (req, res, next) => {
  console.log("[airPressureSensorCtrl]: Air pressure sensor");
  const timeRange = req.params.timeRange;
  const id = req.params.id;
  let filteredData = [];

  // Read, parse and filter csv file based on given time range
  if (id === "p1") filteredData = await filterDataFromFile("sensor_air_pressure_s1.csv", timeRange)
  if (id === "p2") filteredData = await filterDataFromFile("sensor_air_pressure_s2.csv", timeRange)

  res.send(filteredData);
});
