"use strict";

var _this = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Native and third-party modules
 */
var path = require("path");
/**
 * Own modules
 */


var readCSV = require("./read");

var rootPath = require("../rootPath/rootPath");

var _require = require("../time/time"),
    createTodayObject = _require.createTodayObject,
    createDateObjectWithFormat = _require.createDateObjectWithFormat;

exports.requestFilePath = function (filename) {
  return path.join(rootPath, "csv", filename);
};
/**
 * Handler executed when user click "day"
 * control button on trend elements
 */


exports.selectDataPerDay = function (arr) {
  //console.log("[selectDataPerDay]");
  var filteredData = [];
  var today = createTodayObject();
  arr.map(function (_ref) {
    var timestamp = _ref.timestamp,
        value = _ref.value,
        variable = _ref.variable;

    if (timestamp && timestamp.isSame(today, "day")) {
      filteredData.push({
        timestamp: timestamp,
        value: value,
        variable: variable
      });
    }
  });
  return filteredData;
};
/**
 * Handler executed when user click "week" or 
 * "month" control button on trend elements
 */


exports.selectDataPerWeekOrMonth = function (arr, timeRange) {
  //console.log("[selectDataPerWeekOrMonth]");
  var filteredData = [];
  var endDate = createTodayObject(new Date());
  var startDate = endDate.subtract(1, timeRange);
  arr.map(function (_ref2) {
    var timestamp = _ref2.timestamp,
        value = _ref2.value,
        variable = _ref2.variable;

    if (timestamp && timestamp.isBetween(startDate, endDate, "day", "[]")) {
      filteredData.push({
        timestamp: timestamp,
        value: value,
        variable: variable
      });
    }
  });
  return filteredData;
};
/**
 * Handler executed when user click "day", "week" or 
 * "month" control button on deck elements
 */


exports.selectDataCurrentPreviousTimeframe = function (arr, timeRange) {
  //console.log("[selectDataCurrentPreviousTimeframe]");
  var filteredData = [];
  var endDate = createTodayObject();
  var startDate = endDate.subtract(2, timeRange);
  arr.map(function (_ref3) {
    var timestamp = _ref3.timestamp,
        value = _ref3.value,
        variable = _ref3.variable;

    if (timestamp && timestamp.isBetween(startDate, endDate, "day", "(]")) {
      filteredData.push({
        timestamp: timestamp,
        value: value,
        variable: variable
      });
    }
  });
  return filteredData;
};
/**
 * Handler executed when user select "start" and "end"
 * date using the "Datepicker" React element (applies for deck and trend elements)
 */


exports.selectDataPerTimeframe = function (arr, startDate, endDate) {
  console.log("[selectDataPerTimeframe]");
  var filteredData = []; // The given time format matches the one sent by React element (Datepicker)

  var startDateDayjs = createDateObjectWithFormat(startDate, "YYYY-MM-DDT HH-mm-ss-SSS");
  var endDateDayjs = createDateObjectWithFormat(endDate, "YYYY-MM-DDT HH-mm-ss-SSS");
  arr.map(function (el) {
    if (el.timestamp && el.timestamp.isBetween(startDateDayjs, endDateDayjs, "day", "[]")) {
      filteredData.push(el);
    }
  });
  return filteredData;
};

exports.filterDataFromFile = function _callee(filename, timeRange) {
  var filePath, data, custom, isRequestFromDatePicker, isRequestFromDeck, timeRangeDeck;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          filePath = _this.requestFilePath(filename);
          _context.next = 3;
          return regeneratorRuntime.awrap(readCSV(filePath));

        case 3:
          data = _context.sent;
          // Makes reference to "Datepicker" React element (2 "moment" objects)
          custom = timeRange.startDate && timeRange.endDate; // Here I define the "timeRange" used by "control buttons" of "deck" elements

          isRequestFromDatePicker = _typeof(timeRange) === 'object' && timeRange !== null;
          isRequestFromDeck = !isRequestFromDatePicker && timeRange.split("-")[0] === "deck";
          timeRangeDeck = isRequestFromDeck && timeRange.split("-")[1]; // Filtering data

          if (!(timeRange === "day")) {
            _context.next = 10;
            break;
          }

          return _context.abrupt("return", _this.selectDataPerDay(data));

        case 10:
          if (!(timeRange === "week")) {
            _context.next = 12;
            break;
          }

          return _context.abrupt("return", _this.selectDataPerWeekOrMonth(data, "week"));

        case 12:
          if (!(timeRange === "month")) {
            _context.next = 14;
            break;
          }

          return _context.abrupt("return", _this.selectDataPerWeekOrMonth(data, "month"));

        case 14:
          if (!isRequestFromDeck) {
            _context.next = 16;
            break;
          }

          return _context.abrupt("return", _this.selectDataCurrentPreviousTimeframe(data, timeRangeDeck));

        case 16:
          if (!custom) {
            _context.next = 18;
            break;
          }

          return _context.abrupt("return", _this.selectDataPerTimeframe(data, timeRange.startDate, timeRange.endDate));

        case 18:
          return _context.abrupt("return", []);

        case 19:
        case "end":
          return _context.stop();
      }
    }
  });
};