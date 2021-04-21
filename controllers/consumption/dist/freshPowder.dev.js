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


exports.totalPowderCtrl = wrapper(function _callee(req, res, next) {
  var timeRange, filteredData;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("[totalPowderCtrl]: Total fresh powder");
          timeRange = req.params.timeRange;
          _context.next = 4;
          return regeneratorRuntime.awrap(filterDataFromFile("powder_total_fresh.csv", timeRange));

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
exports.spectrumPowderCtrl = wrapper(function _callee2(req, res, next) {
  var timeRange, filteredData;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log("[spectrumPowderCtrl]: Spectrum HD powder");
          timeRange = req.params.timeRange;
          _context2.next = 4;
          return regeneratorRuntime.awrap(filterDataFromFile("powder_spectrum.csv", timeRange));

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
exports.bigbagPowderCtrl = wrapper(function _callee3(req, res, next) {
  var timeRange, id, filteredData;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log("[bigbagPowderCtrl]: Big bag powder");
          timeRange = req.params.timeRange;
          id = req.params.id; //const filteredData = await filterDataFromFile("powder_big_bag.csv", timeRange)
          //const filteredData = await filterDataFromFile("powder_big_bag.csv", timeRange)

          _context3.next = 5;
          return regeneratorRuntime.awrap(filterDataFromFile("powder_big_bag_".concat(id, ".csv"), timeRange));

        case 5:
          filteredData = _context3.sent;
          res.send(filteredData);

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  });
});