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
exports.electricityConsumptionCtrl = wrapper(async (req, res, next) => {
  console.log("[electricityConsumptionCtrl]: Electricity comsumption");
  const timeRange = req.params.timeRange;
  const id = req.params.id;
  const filteredData = await filterDataFromFile(`consumption_electricity_${id}.csv`, timeRange);
  res.send(filteredData);
});

exports.airConsumptionCtrl = wrapper(async (req, res, next) => {
  console.log("[airConsumptionCtrl]: Air comsumption");
  const timeRange = req.params.timeRange;
  const id = req.params.id;
  const filteredData = await filterDataFromFile(`consumption_air_${id}.csv`, timeRange)
  res.send(filteredData);
});

exports.dropdownCtrl = wrapper(async (req, res, next) => {
  console.log("[dropdownCtrl]: Data for dropdown elements");
  const id = req.params.id;

  // If "id" does not match, then send default data
  const defaultDropdownOptions = [
    { key: 1, text: "EAC", value: 1 }
  ];

  // Selec filepath
  let filepath = false;
  switch (id) {
    case "electricity":
      filepath = path.join(rootPath, "configuration", "consumption", "electricityAir", "electricity.json");
      break;
    case "air":
      filepath = path.join(rootPath, "configuration", "consumption", "electricityAir", "air.json");
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