"use strict";

/**
 * Own modules
 */
var wrapper = require("../../utilities/wrapper/wrapper");

var _require = require("../../utilities/csv/filter"),
    filterDataFromFile = _require.filterDataFromFile;
/**
 * Controllers
 */


exports.temperatureSensorCtrl = wrapper(function _callee(req, res, next) {
  var timeRange, id, filteredData;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("[temperatureSensorCtrl]: Temperature sensor");
          timeRange = req.params.timeRange;
          id = req.params.id;
          _context.next = 5;
          return regeneratorRuntime.awrap(filterDataFromFile("sensor_temperature_".concat(id, ".csv"), timeRange));

        case 5:
          filteredData = _context.sent;
          res.send(filteredData);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.humiditySensorCtrl = wrapper(function _callee2(req, res, next) {
  var timeRange, id, filteredData;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log("[humiditySensorCtrl]: Humidity sensor");
          timeRange = req.params.timeRange;
          id = req.params.id;
          _context2.next = 5;
          return regeneratorRuntime.awrap(filterDataFromFile("sensor_humidity_".concat(id, ".csv"), timeRange));

        case 5:
          filteredData = _context2.sent;
          res.send(filteredData);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
});