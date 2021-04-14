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
 * "month" control button on deck elements
 */
exports.selectDataPerWeekOrMonth = (arr, timeRange) => {
  let filteredData = [];
  const endDate = createTodayObject(new Date());
  const startDate = endDate.subtract(1, timeRange);

  arr.map(({ timestamp, value, variable }) => {
    if (timestamp && timestamp.isBetween(startDate, endDate, "day", "(]")) {
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
  let filteredData = [];
  const endDate = createTodayObject();
  const startDate = endDate.subtract(1, timeRange);

  arr.map(({ timestamp, value, variable }) => {
    if (timestamp && timestamp.isBetween(startDate, endDate, timeRange, "[]")) {
      filteredData.push({ timestamp, value, variable });
    }
  });

  return filteredData;
};

/**
 * Handler executed when user select "start" and "end"
 * date using the "Datepicker" React element
 */
exports.selectDataPerTimeframe = (arr, startDate, endDate) => {
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

  // Here I define the "timeRange" used by "control buttons" of "deck" elements
  const isRequestFromDatePicker = typeof timeRange === 'object' && timeRange !== null;
  const isRequestFromDeck = !isRequestFromDatePicker && timeRange.split("-")[0] === "deck";
  const timeRangeDeck = isRequestFromDeck && timeRange.split("-")[1];

  // Filtering data
  if (timeRange === "day") return this.selectDataPerDay(data);
  if (timeRange === "week") return this.selectDataPerWeekOrMonth(data, "week");
  if (timeRange === "month") return this.selectDataPerWeekOrMonth(data, "month");
  if (isRequestFromDeck) return this.selectDataCurrentPreviousTimeframe(data, timeRangeDeck);
  if (custom) return this.selectDataPerTimeframe(data, timeRange.startDate, timeRange.endDate);
  return [];
};