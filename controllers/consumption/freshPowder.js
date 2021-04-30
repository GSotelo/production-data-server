/**
 * Own modules
 */
const wrapper = require("../../utilities/wrapper/wrapper");
const readFile = require("../../utilities/json/read");
const rootPath = require("../../utilities/rootPath/rootPath");
const { filterDataFromFile } = require("../../utilities/csv/filter");

/**
 * Native modules
 */
 const path = require("path");

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
  const id = req.params.id;
  //const filteredData = await filterDataFromFile("powder_big_bag.csv", timeRange)
  //const filteredData = await filterDataFromFile("powder_big_bag.csv", timeRange)
  const filteredData = await filterDataFromFile(`powder_big_bag_${id}.csv`, timeRange);
  res.send(filteredData);
});

exports.dropdownCtrl = wrapper(async (req, res, next) => {
  console.log("[dropdownCtrl]: Data for dropdown elements");
  const id = req.params.id;

  // If "id" does not match, then send default data
  const defaultDropdownOptions = [
    { key: 1, text: "BB1", value: 1 }
  ];

  // Read configuration file (JSON)
  const filepath = path.join(rootPath, "configuration", "consumption", "freshPowder", "bigbags.json");
  const dropdownOptions = await readFile(filepath);

  // Send response
  if (id === "bigbags") {
    res.send(dropdownOptions);
  } else {
    res.send(defaultDropdownOptions)
  }
});
