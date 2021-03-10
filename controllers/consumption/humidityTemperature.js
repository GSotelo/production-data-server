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
   let filteredData = [];
 
   // Read, parse and filter csv file based on given time range
   if (id === "s1") filteredData = await filterDataFromFile("sensor_temperature_s1.csv", timeRange)
   if (id === "s2") filteredData = await filterDataFromFile("sensor_temperature_s2.csv", timeRange)
 
   res.send(filteredData);
 });
 
exports.humiditySensorCtrl = wrapper(async (req, res, next) => {
  console.log("[humiditySensorCtrl]: Humidity sensor");
  const timeRange = req.params.timeRange;
  const id = req.params.id;
  let filteredData = [];

  // Read, parse and filter csv file based on given time range
  if (id === "s1") filteredData = await filterDataFromFile("sensor_humidity_s1.csv", timeRange)
  if (id === "s2") filteredData = await filterDataFromFile("sensor_humidity_s2.csv", timeRange)

  res.send(filteredData);
});
