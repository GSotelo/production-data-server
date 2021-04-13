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

exports.selectDataPerWeekOrMonth = (arr, timeRange) => {
  let startDate;
  let filteredData = [];
  const endDate = createTodayObject().add(1, "day");

  if (timeRange === "week") startDate = endDate.subtract(7, "day");
  if (timeRange === "month") startDate = endDate.subtract(1, "month");

  arr.map(({ timestamp, value, variable }) => {
    if (timestamp && timestamp.isBetween(startDate, endDate, "minute")) {
      filteredData.push({ timestamp, value, variable });
    }
  });

  return filteredData;
};



exports.selectDataCurrentPreviousDay = (arr) => {
  //console.log("EXPRESS: PREVIOUS DAY", timeRange);
  let filteredData = [];
  
  // const endDate = createTodayObject().add(1, "day");
  // const startDate = endDate.subtract(2, "day");

  // arr.map(({ timestamp, value, variable }) => {
  //   if (timestamp && timestamp.isBetween(startDate, endDate, "minute")) {
  //     filteredData.push({ timestamp, value, variable });
  //   }
  // });

  const endDate = createTodayObject()
  const startDate = endDate.subtract(1, "day");
  
  arr.map(({ timestamp, value, variable }) => {
    if (timestamp && timestamp.isBetween(startDate, endDate, "day","[]")) {
      filteredData.push({ timestamp, value, variable });
    }
  });

  return filteredData;
};









exports.selectDataPerTimeframe = (arr, startDate, endDate) => {
  let filteredData = [];

  // The given time format matches the one sent by React element (Datepicker)
  const startDateDayjs = createDateObjectWithFormat(startDate, "YYYY-MM-DDT HH-mm-ss-SSS");
  const endDateDayjs = createDateObjectWithFormat(endDate, "YYYY-MM-DDT HH-mm-ss-SSS");
  
  arr.map(el => {
    if (el.timestamp && el.timestamp.isBetween(startDateDayjs,endDateDayjs, "day", "[]")) {
      filteredData.push(el);
    }
  });

  return filteredData;
};

exports.filterDataFromFile = async (filename, timeRange, startDate, endDate) => {
  const filePath = this.requestFilePath(filename);
  const data = await readCSV(filePath);
  const custom = timeRange.startDate && timeRange.endDate;

  // Filter data
  if (timeRange === "day") return this.selectDataPerDay(data);
  if (timeRange === "week") return this.selectDataPerWeekOrMonth(data, "week");
  if (timeRange === "month") return this.selectDataPerWeekOrMonth(data, "month");
  if (timeRange === "custom") return this.selectDataCurrentPreviousDay(data);

  if (custom) return this.selectDataPerTimeframe(data, timeRange.startDate, timeRange.endDate);
  return [];
};