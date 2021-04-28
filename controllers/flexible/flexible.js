const _ = require("lodash");

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

  // In case, we want to get data for multiple files
  if (_.isObject(filename)) {
    // Get data for all elements
    const data = await Promise.all(filename.map(async el => await filterDataFromFile(el, { startDate, endDate })));
    return res.send(data);
  }

  const filteredData = await filterDataFromFile(filename, { startDate, endDate });
  res.send(filteredData);
});

