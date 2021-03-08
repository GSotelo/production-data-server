/**
 * Native and third-party modules
 */
const fs = require("fs");
const csv = require("csv-parser");

const readCSV = path => {
  const readable = fs.createReadStream(path).pipe(csv());
  return new Promise((resolve, reject) => {
    let buffer = [];
    readable.on("data", chunk => buffer.push(chunk));
    readable.on("end", () => resolve(buffer));
  });
}

module.exports = readCSV;