"use strict";

var _this = void 0;

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

exports.selectDataPerDay = function (arr) {
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

exports.selectDataPerWeekOrMonth = function (arr, timeRange) {
  var startDate;
  var filteredData = [];
  var endDate = createTodayObject().add(1, "day");
  if (timeRange === "week") startDate = endDate.subtract(7, "day");
  if (timeRange === "month") startDate = endDate.subtract(1, "month");
  arr.map(function (_ref2) {
    var timestamp = _ref2.timestamp,
        value = _ref2.value,
        variable = _ref2.variable;

    if (timestamp && timestamp.isBetween(startDate, endDate, "minute")) {
      filteredData.push({
        timestamp: timestamp,
        value: value,
        variable: variable
      });
    }
  });
  return filteredData;
};

exports.selectDataCurrentPreviousDay = function (arr) {
  //console.log("EXPRESS: PREVIOUS DAY", timeRange);
  var filteredData = []; // const endDate = createTodayObject().add(1, "day");
  // const startDate = endDate.subtract(2, "day");
  // arr.map(({ timestamp, value, variable }) => {
  //   if (timestamp && timestamp.isBetween(startDate, endDate, "minute")) {
  //     filteredData.push({ timestamp, value, variable });
  //   }
  // });

  var endDate = createTodayObject();
  var startDate = endDate.subtract(1, "day");
  arr.map(function (_ref3) {
    var timestamp = _ref3.timestamp,
        value = _ref3.value,
        variable = _ref3.variable;

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

exports.selectDataPerTimeframe = function (arr, startDate, endDate) {
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

exports.filterDataFromFile = function _callee(filename, timeRange, startDate, endDate) {
  var filePath, data, custom;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          filePath = _this.requestFilePath(filename);
          _context.next = 3;
          return regeneratorRuntime.awrap(readCSV(filePath));

        case 3:
          data = _context.sent;
          custom = timeRange.startDate && timeRange.endDate; // Filter data

          if (!(timeRange === "day")) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", _this.selectDataPerDay(data));

        case 7:
          if (!(timeRange === "week")) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("return", _this.selectDataPerWeekOrMonth(data, "week"));

        case 9:
          if (!(timeRange === "month")) {
            _context.next = 11;
            break;
          }

          return _context.abrupt("return", _this.selectDataPerWeekOrMonth(data, "month"));

        case 11:
          if (!(timeRange === "custom")) {
            _context.next = 13;
            break;
          }

          return _context.abrupt("return", _this.selectDataCurrentPreviousDay(data));

        case 13:
          if (!custom) {
            _context.next = 15;
            break;
          }

          return _context.abrupt("return", _this.selectDataPerTimeframe(data, timeRange.startDate, timeRange.endDate));

        case 15:
          return _context.abrupt("return", []);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  });
};