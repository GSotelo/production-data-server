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
  /**
  * Here "timestamp", "value", "variable" refers to the 
  * header names defined in "[read.js]" module
  */

  arr.map(function (_ref2) {
    var timestamp = _ref2.timestamp,
        value = _ref2.value,
        variable = _ref2.variable,
        validity = _ref2.validity;

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
  var filePath, data, custom, isRequestFromDatePicker, isRequestFromDeck, isPreviousTimeRequired, multiTimeRange;
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
          custom = timeRange.startDate && timeRange.endDate;
          /**
           * Here I selet requests from control buttons within "deck" elements
           * Datepicker will provide no comparison between current and previous timeframes
           */

          isRequestFromDatePicker = _typeof(timeRange) === 'object' && timeRange !== null;
          isRequestFromDeck = !isRequestFromDatePicker && timeRange.split("-")[0] === "deck";
          /**
           * Here I check if I need a timeframe similar as the one used in "deck" elements.
           * This situation applies when I have a trend (i.e. line) and one card (with footer)
           * that requires to show current versus previous data (refer to color change screen)
           */

          isPreviousTimeRequired = typeof timeRange === 'string' && timeRange.split("-")[0] === "multi" || isRequestFromDeck;
          multiTimeRange = isPreviousTimeRequired && timeRange.split("-")[1]; // Normal behaviour: Requires one asset at a time using control buttons ("day", "week", "month")

          if (!(timeRange === "day")) {
            _context.next = 11;
            break;
          }

          return _context.abrupt("return", _this.selectDataPerDay(data));

        case 11:
          if (!(timeRange === "week")) {
            _context.next = 13;
            break;
          }

          return _context.abrupt("return", _this.selectDataPerWeekOrMonth(data, "week"));

        case 13:
          if (!(timeRange === "month")) {
            _context.next = 15;
            break;
          }

          return _context.abrupt("return", _this.selectDataPerWeekOrMonth(data, "month"));

        case 15:
          if (!custom) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", _this.selectDataPerTimeframe(data, timeRange.startDate, timeRange.endDate));

        case 17:
          if (!isPreviousTimeRequired) {
            _context.next = 19;
            break;
          }

          return _context.abrupt("return", _this.selectDataCurrentPreviousTimeframe(data, multiTimeRange));

        case 19:
          return _context.abrupt("return", []);

        case 20:
        case "end":
          return _context.stop();
      }
    }
  });
};