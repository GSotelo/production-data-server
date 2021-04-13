/**
 * Native and third-party modules
 */
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const isoWeek = require("dayjs/plugin/isoWeek");
const duration = require('dayjs/plugin/duration')
const isBetween = require('dayjs/plugin/isBetween')
const customParseFormat = require("dayjs/plugin/customParseFormat");


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
exports.createDateObject = dateAsString => (
  // IMPORTANT: This format should match the timestamp in csv file
  dayjs.utc(dateAsString, "DD/MM/YYYY HH:mm")
);

/**
 * Handlers
 */
exports.createDateObjectWithFormat = (dateAsString, format) => (
  // IMPORTANT: This format should match the timestamp in csv file
  dayjs.utc(dateAsString, format)
);

//exports.createTodayObject = () => dayjs.utc(new Date());
exports.createTodayObject = () => dayjs();

exports.getTimeDifference = (startDate, endDate, timeRange) => endDate.diff(startDate, timeRange, true);






