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

const mapValues = ({ header, index, value }) => (
  header === "timestamp" ? createDateObject(value) : value
);

const readCSV = async path => {
  // Csv parser configuration
  const configParser = {
    headers: ["variable", "timestamp", "value", "validity", "ms"],
    skipLines: 1,
    mapValues
  };

  // Check if file exists
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
