/**
 * Own modules
 */
const wrapper = require("../../utilities/wrapper/wrapper");
const { filterDataFromFile } = require("../../utilities/csv/filter");

/**
 * Controllers
 */
exports.sprayedPowderTotalCtrl = wrapper(async (req, res, next) => {
  console.log("[sprayedPowderTotalCtrl]: Sprayed powder calculated total");
  const timeRange = req.params.timeRange;
  const filteredData = await filterDataFromFile("sprayed_powder_total.csv", timeRange)
  res.send(filteredData);
});

exports.sprayedPowderRecipeCtrl = wrapper(async (req, res, next) => {
  console.log("[sprayedPowderRecipeCtrl]: Sprayed powder calculated per Recipe");
  const timeRange = req.params.timeRange;
  const filteredData = await filterDataFromFile("sprayed_powder_recipe.csv", timeRange)
  res.send(filteredData);
});
