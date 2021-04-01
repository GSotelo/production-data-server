/**
 * Own modules
 */
const wrapper = require("../../utilities/wrapper/wrapper");
const { filterDataFromFile } = require("../../utilities/csv/filter");

/**
 * Controllers
 */
exports.powderTypeCtrl = wrapper(async (req, res, next) => {
  console.log("[powderTypeCtrl]: Consumption per powder type");
  const timeRange = req.params.timeRange;
  const id = req.params.id;
  let filteredData = [];

  // Read, parse and filter csv file based on given time range
  if (id) {
    filteredData = await filterDataFromFile(`consumption_powder_type_${id}.csv`, timeRange);
    return res.send(filteredData);
  }

  // If no type is given, then send data of all powder types
  filteredData = await filterDataFromFile("consumption_powder_all_types.csv", timeRange);
  res.send(filteredData);
});
