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
  let filteredData = [];
  const id = req.params.id;
  const timeRange = req.params.timeRange;

  // Read, parse and filter csv file based on given time range
  if (id === "1") filteredData = await filterDataFromFile("hours_sprayed.csv", timeRange)
  if (id === "2") filteredData = await filterDataFromFile("hours_start_stop.csv", timeRange)
  if (id === "3") filteredData = await filterDataFromFile("hours_total_running.csv", timeRange)

  // Send http response (compressed)
  res.send(filteredData);
});

exports.sprayModeCtrl = wrapper(async (req, res, next) => {
  console.log("[sprayModeCtrl]: Spray mode");
  res.send({ status: true, messenger: "Spray mode controller" });
});

exports.systemStatusCtrl = wrapper(async (req, res, next) => {
  console.log("[systemStatusCtrl]: System status");
  res.send({ status: true, messenger: "System status controller" });
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

