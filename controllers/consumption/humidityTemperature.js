/**
 * Own modules
 */
const wrapper = require("../../utilities/wrapper/wrapper");
const readFile = require("../../utilities/json/read");
const rootPath = require("../../utilities/rootPath/rootPath");
const { filterDataFromFile } = require("../../utilities/csv/filter");

/**
 * Native modules
 */
 const path = require("path");

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

exports.dropdownCtrl = wrapper(async (req, res, next) => {
  console.log("[dropdownCtrl]: Data for dropdown elements");
  const id = req.params.id;

  // If "id" does not match, then send default data
  const defaultDropdownOptions = [
    { key: 1, text: "HTS", value: 1 }
  ];

  // Selec filepath
  let filepath = false;
  switch (id) {
    case "humidity":
      filepath = path.join(rootPath, "configuration", "consumption", "humidityTemperature", "humidity.json");
      break;
    case "temperature":
      filepath = path.join(rootPath, "configuration", "consumption", "humidityTemperature", "temperature.json");
      break;
    default:
      break;
  }

  if(!filepath){
    res.send(defaultDropdownOptions);
  }

  const dropdownOptions = await readFile(filepath);
  res.send(dropdownOptions);
});
