/**
 * Own modules
 */
const wrapper = require("../../utilities/wrapper/wrapper");
const { filterDataFromFile } = require("../../utilities/csv/filter");

/**
 * Controllers
 */
exports.totalPowderCtrl = wrapper(async (req, res, next) => {
  console.log("[totalPowderCtrl]: Total fresh powder");
  const timeRange = req.params.timeRange;
  const filteredData = await filterDataFromFile("powder_total_fresh.csv", timeRange)
  res.send(filteredData);
});

exports.spectrumPowderCtrl = wrapper(async (req, res, next) => {
  console.log("[spectrumPowderCtrl]: Spectrum HD powder");
  const timeRange = req.params.timeRange;
  const filteredData = await filterDataFromFile("powder_spectrum.csv", timeRange)
  res.send(filteredData);
});

exports.bigbagPowderCtrl = wrapper(async (req, res, next) => {
  console.log("[bigbagPowderCtrl]: Big bag powder");
  const timeRange = req.params.timeRange;
  const filteredData = await filterDataFromFile("powder_big_bag.csv", timeRange)
  res.send(filteredData);
});
