/**
 * Own modules
 */
const wrapper = require("../../utilities/wrapper/wrapper");
const { filterDataFromFile } = require("../../utilities/csv/filter");

/**
 * Controllers
 */
exports.temperatureSensorCtrl = wrapper(async (req, res, next) => {
  console.log("[temperatureSensorCtrl]: Temperature sensor");
  const timeRange = req.params.timeRange;
  const id = req.params.id;
  const filteredData = await filterDataFromFile(`sensor_temperature_${id}.csv`, timeRange);
  res.send(filteredData);
});

exports.humiditySensorCtrl = wrapper(async (req, res, next) => {
  console.log("[humiditySensorCtrl]: Humidity sensor");
  const timeRange = req.params.timeRange;
  const id = req.params.id;
  const filteredData = await filterDataFromFile(`sensor_humidity_${id}.csv`, timeRange);
  res.send(filteredData);
});
