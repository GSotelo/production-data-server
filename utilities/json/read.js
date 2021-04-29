const jsonfile = require("jsonfile");

/**
 * 
 * @param {*} path Path to JSON file
 * Any rejected promise will be caught by the "wrapper" handler
 */
const readFile = async (filepath) => {
  const data = await jsonfile.readFile(filepath);
  return data;
};

module.exports = readFile;
