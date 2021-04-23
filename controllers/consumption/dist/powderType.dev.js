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
          _context.next = 5;
          return regeneratorRuntime.awrap(filterDataFromFile("consumption_powder_type_".concat(id, ".csv"), timeRange));

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