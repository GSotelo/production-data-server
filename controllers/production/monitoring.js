/**
 * Own modules
 */
const wrapper = require("../../utilities/wrapper/wrapper");
const { filterDataFromFile } = require("../../utilities/csv/filter");

/**
 * Controllers
 */
exports.runningHoursCtrl = wrapper(async (req, res, next) => {
  console.log("[runningHoursCtrl]: Request running hours");
  const timeRange = req.params.timeRange;
  const filteredData = await filterDataFromFile("running_hours.csv", timeRange)
  res.send(filteredData);
});

exports.sprayModeCtrl = wrapper(async (req, res, next) => {
  console.log("[sprayModeCtrl]: Spray mode");
  const timeRange = req.params.timeRange;
  const filteredData = await filterDataFromFile("sprayed_mode.csv", timeRange)
  res.send(filteredData);
});

exports.systemStatusCtrl = wrapper(async (req, res, next) => {
  console.log("[systemStatusCtrl]: System status");
  const timeRange = req.params.timeRange;
  const filteredData = await filterDataFromFile("system_status.csv", timeRange)
  res.send(filteredData);
});

exports.coatedSurfaceCtrl = wrapper(async (req, res, next) => {
  console.log("[coatedSurfaceCtrl]: Coated surface");
  const timeRange = req.params.timeRange;
  const filteredData = await filterDataFromFile("coated_surface.csv", timeRange)
  res.send(filteredData);
});

exports.lineDensityCtrl = wrapper(async (req, res, next) => {
  console.log("[lineDensityCtrl]: Line density");
  const timeRange = req.params.timeRange;
  const filteredData = await filterDataFromFile("line_density.csv", timeRange)
  res.send(filteredData);
});

exports.conveyorSpeedCtrl = wrapper(async (req, res, next) => {
  console.log("[conveyorSpeedCtrl]: Conveyor Speed");
  const timeRange = req.params.timeRange;
  const filteredData = await filterDataFromFile("conveyor_speed.csv", timeRange)
  res.send(filteredData);
});

