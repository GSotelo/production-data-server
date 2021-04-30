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
exports.airPressureSensorCtrl = wrapper(async (req, res, next) => {
  console.log("[airPressureSensorCtrl]: Air pressure sensor");
  const timeRange = req.params.timeRange;
  const id = req.params.id;
  const filteredData = await filterDataFromFile(`sensor_air_pressure_${id}.csv`, timeRange);
  res.send(filteredData);
});

exports.dropdownCtrl = wrapper(async (req, res, next) => {
  console.log("[dropdownCtrl]: Data for dropdown elements");
  const id = req.params.id;

  // If "id" does not match, then send default data
  const defaultDropdownOptions = [
    { key: 1, text: "AP1", value: 1 }
  ];

  // Read configuration file (JSON)
  const filepath = path.join(rootPath, "configuration", "consumption", "airPressure", "airPressure.json");
  const dropdownOptions = await readFile(filepath);

  // Send response
  if (id === "air-pressure") {
    res.send(dropdownOptions);
  } else {
    res.send(defaultDropdownOptions)
  }
});