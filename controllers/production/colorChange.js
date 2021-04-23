/**
 * Own modules
 */
const wrapper = require("../../utilities/wrapper/wrapper");
const { filterDataFromFile } = require("../../utilities/csv/filter");

/**
 * Controllers
 */
exports.colorChangeQuickestLongestCtrl = wrapper(async (req, res, next) => {
  console.log("[colorChangeQuickestLongestCtrl]: Color change quickest/longest");
  const timeRange = req.params.timeRange;
  const filenames = ["color_change_quickest.csv","color_change_longest.csv"];
  const filteredData = await Promise.all(filenames.map(async el => await filterDataFromFile(el, timeRange)));
  res.send(filteredData);
});

exports.colorChangeDurationCtrl = wrapper(async (req, res, next) => {
  console.log("[colorChangeDurationCtrl]: Color change duration");
  const timeRange = req.params.timeRange;
  const filteredData = await filterDataFromFile("color_change_duration.csv", timeRange);
  res.send(filteredData);
});

exports.colorChangeAbortedCtrl = wrapper(async (req, res, next) => {
  console.log("[colorChangeAbortedCtrl]: Color change aborted");
  const timeRange = req.params.timeRange;
  const filteredData = await filterDataFromFile("color_change_aborted.csv", timeRange);
  res.send(filteredData);
});
