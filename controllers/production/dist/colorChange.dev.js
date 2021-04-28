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


exports.colorChangeQuickestLongestCtrl = wrapper(function _callee(req, res, next) {
  var timeRange, filteredData;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("[colorChangeQuickestLongestCtrl]: Color change quickest/longest");
          timeRange = req.params.timeRange;
          _context.next = 4;
          return regeneratorRuntime.awrap(filterDataFromFile("color_change_quickest_longest.csv", timeRange));

        case 4:
          filteredData = _context.sent;
          res.send(filteredData);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.colorChangeDurationCtrl = wrapper(function _callee2(req, res, next) {
  var timeRange, filteredData;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log("[colorChangeDurationCtrl]: Color change duration");
          timeRange = req.params.timeRange;
          _context2.next = 4;
          return regeneratorRuntime.awrap(filterDataFromFile("color_change_duration.csv", timeRange));

        case 4:
          filteredData = _context2.sent;
          res.send(filteredData);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
});
exports.colorChangeAbortedCtrl = wrapper(function _callee3(req, res, next) {
  var timeRange, filteredData;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log("[colorChangeAbortedCtrl]: Color change aborted");
          timeRange = req.params.timeRange;
          _context3.next = 4;
          return regeneratorRuntime.awrap(filterDataFromFile("color_change_aborted.csv", timeRange));

        case 4:
          filteredData = _context3.sent;
          res.send(filteredData);

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  });
});