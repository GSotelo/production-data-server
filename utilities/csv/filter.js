/**
 * Native and third-party modules
 */
const path = require("path");

/**
 * Own modules
 */
const readCSV = require("./read");
const rootPath = require("../rootPath/rootPath");
const { createTodayObject, createDateObjectWithFormat } = require("../time/time");

exports.requestFilePath = (filename) => path.join(rootPath, "csv", filename);

/**
 * Handler executed when user click "day"
 * control button on trend elements
 */
exports.selectDataPerDay = arr => {
  //console.log("[selectDataPerDay]");
  let filteredData = [];
  const today = createTodayObject();

  arr.map(({ timestamp, value, variable }) => {
    if (timestamp && timestamp.isSame(today, "day")) {
      filteredData.push({ timestamp, value, variable });
    }
  });

  return filteredData;
};

/**
 * Handler executed when user click "week" or 
 * "month" control button on trend elements
 */
exports.selectDataPerWeekOrMonth = (arr, timeRange) => {
  //console.log("[selectDataPerWeekOrMonth]");
  let filteredData = [];
  const endDate = createTodayObject(new Date());
  const startDate = endDate.subtract(1, timeRange);

  arr.map(({ timestamp, value, variable }) => {
    if (timestamp && timestamp.isBetween(startDate, endDate, "day", "[]")) {
      filteredData.push({ timestamp, value, variable });
    }
  });

  return filteredData;
};

/**
 * Handler executed when user click "day", "week" or 
 * "month" control button on deck elements
 */
exports.selectDataCurrentPreviousTimeframe = (arr, timeRange) => {
  //console.log("[selectDataCurrentPreviousTimeframe]");
  let filteredData = [];

  const endDate = createTodayObject();
  const startDate = endDate.subtract(2, timeRange);

  arr.map(({ timestamp, value, variable }) => {
    if (timestamp && timestamp.isBetween(startDate, endDate, "day", "(]")) {
      filteredData.push({ timestamp, value, variable });
    }
  });

  return filteredData;
};

/**
 * Handler executed when user select "start" and "end"
 * date using the "Datepicker" React element (applies for deck and trend elements)
 */
exports.selectDataPerTimeframe = (arr, startDate, endDate) => {
  console.log("[selectDataPerTimeframe]");
  let filteredData = [];

  // The given time format matches the one sent by React element (Datepicker)
  const startDateDayjs = createDateObjectWithFormat(startDate, "YYYY-MM-DDT HH-mm-ss-SSS");
  const endDateDayjs = createDateObjectWithFormat(endDate, "YYYY-MM-DDT HH-mm-ss-SSS");

  arr.map(el => {
    if (el.timestamp && el.timestamp.isBetween(startDateDayjs, endDateDayjs, "day", "[]")) {
      filteredData.push(el);
    }
  });

  return filteredData;
};

exports.filterDataFromFile = async (filename, timeRange) => {
  const filePath = this.requestFilePath(filename);
  const data = await readCSV(filePath);

  // Makes reference to "Datepicker" React element (2 "moment" objects)
  const custom = timeRange.startDate && timeRange.endDate;

  /**
   * Here I selet requests from control buttons within "deck" elements
   * Datepicker will provide no comparison between current and previous timeframes
   */
  const isRequestFromDatePicker = typeof timeRange === 'object' && timeRange !== null;
  const isRequestFromDeck = !isRequestFromDatePicker && timeRange.split("-")[0] === "deck";

  /**
   * Here I check if I need a timeframe similar as the one used in "deck" elements.
   * This situation applies when I have a trend (i.e. line) and one card (with footer)
   * that requires to show current versus previous data (refer to color change screen)
   */
  const isPreviousTimeRequired = (typeof timeRange === 'string' && timeRange.split("-")[0] === "multi") || isRequestFromDeck;
  const multiTimeRange = isPreviousTimeRequired && timeRange.split("-")[1];

  // Normal behaviour: Requires one asset at a time using control buttons ("day", "week", "month")
  if (timeRange === "day") return this.selectDataPerDay(data);
  if (timeRange === "week") return this.selectDataPerWeekOrMonth(data, "week");
  if (timeRange === "month") return this.selectDataPerWeekOrMonth(data, "month");

  // Normal behaviour: Requires one asset at a time using datepickers
  if (custom) return this.selectDataPerTimeframe(data, timeRange.startDate, timeRange.endDate);

  // Custom behaviour: Requires more than one asset at a time using control buttons either on deck elements or trends
  if (isPreviousTimeRequired) return this.selectDataCurrentPreviousTimeframe(data, multiTimeRange);

  // Default when no criteria matches
  return [];
};