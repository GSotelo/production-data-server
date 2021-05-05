/**
 * Own modules
 */
const wrapper = require("../../utilities/wrapper/wrapper");
const readFile = require("../../utilities/json/read");
const rootPath = require("../../utilities/rootPath/rootPath");
const { filterDataFromFile } = require("../../utilities/csv/filter");

const path = require("path");

/**
 * Controllers (JSON)
 */
exports.batchInformationCtrl = wrapper(async (req, res, next) => {
  console.log("[batchInformationCtrl]: Batch information overview");
  const filepath = path.join(rootPath, "configuration", "production", "batchInformation", "batchInformation.json");
  const dataJSON = await readFile(filepath);
  res.send(dataJSON);
});

/**
 * Controllers (CSV)
 */
// exports.batchInformationCtrl = wrapper(async (req, res, next) => {
//   console.log("[batchInformationCtrl]: Batch information overview");
//   const filteredData = await filterDataFromFile("batch_overview.csv", "allTime");
//   res.send(filteredData);
// });

