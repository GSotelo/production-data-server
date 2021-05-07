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
exports.powderTypeCtrl = wrapper(async (req, res, next) => {
  console.log("[powderTypeCtrl]: Consumption per powder type");
  const timeRange = req.params.timeRange;
  const id = req.params.id;
  const filteredData = await filterDataFromFile(`consumption_powder_type_${id}.csv`, timeRange);
  res.send(filteredData);
});

exports.totalPowderTypeCtrl = wrapper(async (req, res, next) => {
  console.log("[totalPowderTypeCtrl]: Total consumption per powder type");
  const files = ["consumption_powder_type_1.csv", "consumption_powder_type_2.csv"];
  const data = await Promise.all(files.map(async file => await filterDataFromFile(file, "allTime")));
  res.send(data);
});

exports.dropdownCtrl = wrapper(async (req, res, next) => {
  console.log("[dropdownCtrl]: Data for dropdown elements");
  const id = req.params.id;

  // If "id" does not match, then send default data
  const defaultDropdownOptions = [ 
    { key: 1, text: "T1", value: 1 }
  ];

  // Read configuration file (JSON)
  const filepath = path.join(rootPath, "configuration", "consumption", "powderType", "types.json");
  const dropdownOptions = await readFile(filepath);

  // Send response
  if (id === "types") {
    res.send(dropdownOptions);
  } else {
    res.send(defaultDropdownOptions)
  }
});