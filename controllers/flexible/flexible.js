/**
 * Own modules
 */
const wrapper = require("../../utilities/wrapper/wrapper");
const { filterDataFromFile } = require("../../utilities/csv/filter");

/**
 * Controller
 */
exports.flexibleCtrl = wrapper(async (req, res, next) => {
  console.log("[flexibleCtrl]: Flexible controller for HTTP POST request");

  // POST parameters
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;
  const filename = req.body.filename;

  const filteredData = await filterDataFromFile(filename, { startDate, endDate });
  res.send(filteredData);
});

