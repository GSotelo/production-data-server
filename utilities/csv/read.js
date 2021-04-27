/**
 * Native and third-party modules
 */
const fs = require("fs");
const csv = require("csv-parser");

/**
 * Own modules
 */
const { createDateObject } = require("../time/time");

/**
 * Global scope
 */
const fsPromises = fs.promises;

const mapValues = ({ header, index, value }) => {
  // Convert timestamp elements to dayjs objects
  if (header === "timestamp") {
    return createDateObject(value);
  }
  // Parse all values to float
  if (header === "value") {
    return parseFloat(value);
  }
  return value;
};

/**
 * Here I define headers I'm using to parse the file (custom)
 * I'm skipping the first line of each csv file. The only
 * thing that matter is the values are ordered by each row
 */
const readCSV = async path => {
  // Csv parser configuration
  const configParser = {
    headers: ["variable", "timestamp", "value", "validity", "ms"],
    skipLines: 1,
    mapValues
  };

  // Check if file exists. If not, rejected promise is caught by the wrapper function
  await fsPromises.access(path, fs.constants.F_OK && fs.constants.R_OK)

  // If file exists, create readbable stream
  const readable = fs.createReadStream(path).pipe(csv(configParser));

  return new Promise((resolve, reject) => {
    let buffer = [];
    readable.on("data", chunk => buffer.push(chunk));
    readable.on("end", () => resolve(buffer));
  });
}

module.exports = readCSV;
