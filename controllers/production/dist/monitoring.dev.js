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


exports.runningHoursCtrl = wrapper(function _callee(req, res, next) {
  var filteredData, id, timeRange;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("[runningHoursCtrl]: Request running hours");
          filteredData = [];
          id = req.params.id;
          timeRange = req.params.timeRange; // Read, parse and filter csv file based on given time range

          if (!(id === "1")) {
            _context.next = 8;
            break;
          }

          _context.next = 7;
          return regeneratorRuntime.awrap(filterDataFromFile("hours_sprayed.csv", timeRange));

        case 7:
          filteredData = _context.sent;

        case 8:
          if (!(id === "2")) {
            _context.next = 12;
            break;
          }

          _context.next = 11;
          return regeneratorRuntime.awrap(filterDataFromFile("hours_start_stop.csv", timeRange));

        case 11:
          filteredData = _context.sent;

        case 12:
          if (!(id === "3")) {
            _context.next = 16;
            break;
          }

          _context.next = 15;
          return regeneratorRuntime.awrap(filterDataFromFile("hours_total_running.csv", timeRange));

        case 15:
          filteredData = _context.sent;

        case 16:
          // Send http response (compressed)
          res.send(filteredData);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.sprayModeCtrl = wrapper(function _callee2(req, res, next) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log("[sprayModeCtrl]: Spray mode");
          res.send({
            status: true,
            messenger: "Spray mode controller"
          });

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
});
exports.systemStatusCtrl = wrapper(function _callee3(req, res, next) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log("[systemStatusCtrl]: System status");
          res.send({
            status: true,
            messenger: "System status controller"
          });

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  });
});
exports.coatedSurfaceCtrl = wrapper(function _callee4(req, res, next) {
  var timeRange, filteredData;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          console.log("[coatedSurfaceCtrl]: Coated surface");
          timeRange = req.params.timeRange;
          _context4.next = 4;
          return regeneratorRuntime.awrap(filterDataFromFile("coated_surface.csv", timeRange));

        case 4:
          filteredData = _context4.sent;
          res.send(filteredData);

        case 6:
        case "end":
          return _context4.stop();
      }
    }
  });
});
exports.lineDensityCtrl = wrapper(function _callee5(req, res, next) {
  var timeRange, filteredData;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          console.log("[lineDensityCtrl]: Line density");
          timeRange = req.params.timeRange;
          _context5.next = 4;
          return regeneratorRuntime.awrap(filterDataFromFile("line_density.csv", timeRange));

        case 4:
          filteredData = _context5.sent;
          res.send(filteredData);

        case 6:
        case "end":
          return _context5.stop();
      }
    }
  });
});
exports.conveyorSpeedCtrl = wrapper(function _callee6(req, res, next) {
  var timeRange, filteredData;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          console.log("[conveyorSpeedCtrl]: Conveyor Speed");
          timeRange = req.params.timeRange;
          _context6.next = 4;
          return regeneratorRuntime.awrap(filterDataFromFile("conveyor_speed.csv", timeRange));

        case 4:
          filteredData = _context6.sent;
          res.send(filteredData);

        case 6:
        case "end":
          return _context6.stop();
      }
    }
  });
});