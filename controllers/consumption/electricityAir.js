/**
 * Own modules
 */
const wrapper = require("../../utilities/wrapper/wrapper");
const { filterDataFromFile } = require("../../utilities/csv/filter");

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
