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
exports.sprayedPowderTotalCtrl = wrapper(async (req, res, next) => {
  console.log("[sprayedPowderTotalCtrl]: Sprayed powder calculated total");
  const timeRange = req.params.timeRange;
  const filteredData = await filterDataFromFile("sprayed_powder_total.csv", timeRange)
  res.send(filteredData);
});

exports.sprayedPowderRecipeCtrl = wrapper(async (req, res, next) => {
  console.log("[sprayedPowderRecipeCtrl]: Sprayed powder calculated per Recipe");
  const timeRange = req.params.timeRange;
  const id = req.params.id;
  const filteredData = await filterDataFromFile(`sprayed_powder_recipe_${id}.csv`, timeRange)
  res.send(filteredData);
});

exports.dropdownCtrl = wrapper(async (req, res, next) => {
  console.log("[dropdownCtrl]: Data for dropdown elements");
  const id = req.params.id;

  // If "id" does not match, then send default data
  const defaultDropdownOptions = [
    { key: 1, text: `el1`, value: 1 }
  ];

  // Read configuration file (JSON)
  const filepath = path.join(rootPath, "configuration", "consumption", "sprayedPowder", "recipes.json");
  const dropdownOptions = await readFile(filepath);

  // Send response
  if (id === "recipes") {
    res.send(dropdownOptions);
  } else {
    res.send(defaultDropdownOptions)
  }
});
