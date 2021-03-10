/**
 * Native and third-party modules
 */
const path = require("path");

/**
 * Own modules
 */
const readCSV = require("./read");
const rootPath = require("../rootPath/rootPath");
const { createTodayObject } = require("../time/time");

exports.requestFilePath = (filename) => path.join(rootPath, "csv", filename);

exports.selectDataPerDay = arr => {
  let filteredData = [];
  const today = createTodayObject();

  arr.map(el => {
    if (el.timestamp.isSame(today, "day")) {
      filteredData.push(el);
    }
  });

  return filteredData;
};

exports.selectDataPerWeekOrMonth = (arr, timeRange) => {
  let startDate;
  let filteredData = [];
  const endDate = createTodayObject();

  if (timeRange === "week") startDate = endDate.subtract(6, "day");
  if (timeRange === "month") startDate = endDate.subtract(1, "month");

  arr.map(el => {
    if (el.timestamp.isBetween(startDate, endDate, "minute")) {
      filteredData.push(el);
    }
  });

  return filteredData;
};

exports.selectDataPerTimeframe = (arr, startDate, endDate) => {
  let filteredData = [];

  arr.map(el => {
    if (el.timestamp.isBetween(startDate, endDate, "minute")) {
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
  if (custom) return this.selectDataPerTimeframe(data, timeRange.startDate, timeRange.endDate);
  return [];
};