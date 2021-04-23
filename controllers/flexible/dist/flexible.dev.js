"use strict";

var _ = require("lodash");
/**
 * Own modules
 */


var wrapper = require("../../utilities/wrapper/wrapper");

var _require = require("../../utilities/csv/filter"),
    filterDataFromFile = _require.filterDataFromFile;
/**
 * Controller
 */


exports.flexibleCtrl = wrapper(function _callee2(req, res, next) {
  var startDate, endDate, filename, data, filteredData;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log("[flexibleCtrl]: Flexible controller for HTTP POST request"); // POST parameters

          startDate = req.body.startDate;
          endDate = req.body.endDate;
          filename = req.body.filename;

          if (!_.isObject(filename)) {
            _context2.next = 9;
            break;
          }

          _context2.next = 7;
          return regeneratorRuntime.awrap(Promise.all(filename.map(function _callee(el) {
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return regeneratorRuntime.awrap(filterDataFromFile(el, {
                      startDate: startDate,
                      endDate: endDate
                    }));

                  case 2:
                    return _context.abrupt("return", _context.sent);

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            });
          })));

        case 7:
          data = _context2.sent;
          return _context2.abrupt("return", res.send(data));

        case 9:
          _context2.next = 11;
          return regeneratorRuntime.awrap(filterDataFromFile(filename, {
            startDate: startDate,
            endDate: endDate
          }));

        case 11:
          filteredData = _context2.sent;
          res.send(filteredData);

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  });
});