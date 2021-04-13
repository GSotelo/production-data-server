"use strict";

/**
 * Native and third-party modules
 */
var fs = require("fs");

var csv = require("csv-parser");
/**
 * Own modules
 */


var _require = require("../time/time"),
    createDateObject = _require.createDateObject;
/**
 * Global scope
 */


var fsPromises = fs.promises;

var mapValues = function mapValues(_ref) {
  var header = _ref.header,
      index = _ref.index,
      value = _ref.value;

  if (header === "timestamp") {
    return createDateObject(value);
  }

  if (header === "value") {
    return parseFloat(value);
  }

  return value;
};

var readCSV = function readCSV(path) {
  var configParser, readable;
  return regeneratorRuntime.async(function readCSV$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // Csv parser configuration
          configParser = {
            headers: ["variable", "timestamp", "value", "validity", "ms"],
            skipLines: 1,
            mapValues: mapValues
          }; // Check if file exists

          _context.next = 3;
          return regeneratorRuntime.awrap(fsPromises.access(path, fs.constants.F_OK && fs.constants.R_OK));

        case 3:
          // If file exists, create readbable stream
          readable = fs.createReadStream(path).pipe(csv(configParser));
          return _context.abrupt("return", new Promise(function (resolve, reject) {
            var buffer = [];
            readable.on("data", function (chunk) {
              return buffer.push(chunk);
            });
            readable.on("end", function () {
              return resolve(buffer);
            });
          }));

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports = readCSV;