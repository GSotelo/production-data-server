"use strict";

/**
 * Native and third-party modules
 */
var dayjs = require("dayjs");

var utc = require("dayjs/plugin/utc");

var isoWeek = require("dayjs/plugin/isoWeek");

var duration = require('dayjs/plugin/duration');

var isBetween = require('dayjs/plugin/isBetween');

var customParseFormat = require("dayjs/plugin/customParseFormat");
/**
 * Plugins
 */


dayjs.extend(utc);
dayjs.extend(isoWeek);
dayjs.extend(duration);
dayjs.extend(isBetween);
dayjs.extend(customParseFormat);
/**
 * Handlers
 */

exports.createDateObject = function (dateAsString) {
  return (// IMPORTANT: This format should match the timestamp in csv file
    dayjs.utc(dateAsString, "DD/MM/YYYY HH:mm")
  );
};
/**
 * Handlers
 */


exports.createDateObjectWithFormat = function (dateAsString, format) {
  return (// IMPORTANT: This format should match the timestamp in csv file
    dayjs.utc(dateAsString, format)
  );
}; //exports.createTodayObject = () => dayjs.utc(new Date());


exports.createTodayObject = function () {
  return dayjs();
};

exports.getTimeDifference = function (startDate, endDate, timeRange) {
  return endDate.diff(startDate, timeRange, true);
};