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


exports.powderTypeCtrl = wrapper(function _callee(req, res, next) {
  var timeRange, id, filteredData;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("[powderTypeCtrl]: Consumption per powder type");
          timeRange = req.params.timeRange;
          id = req.params.id;
          filteredData = []; // Read, parse and filter csv file based on given time range

          if (!id) {
            _context.next = 9;
            break;
          }

          _context.next = 7;
          return regeneratorRuntime.awrap(filterDataFromFile("consumption_powder_type_".concat(id, ".csv"), timeRange));

        case 7:
          filteredData = _context.sent;
          return _context.abrupt("return", res.send(filteredData));

        case 9:
          _context.next = 11;
          return regeneratorRuntime.awrap(filterDataFromFile("consumption_powder_all_types.csv", timeRange));

        case 11:
          filteredData = _context.sent;
          res.send(filteredData);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
});