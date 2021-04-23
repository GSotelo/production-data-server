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
  const filteredData = await filterDataFromFile(`consumption_powder_type_${id}.csv`, timeRange);
  res.send(filteredData);
});
