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
  const filteredData = await filterDataFromFile(`sensor_air_pressure_${id}.csv`, timeRange);
  res.send(filteredData);
});
