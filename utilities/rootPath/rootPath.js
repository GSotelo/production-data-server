const path = require("path");

/**
 * [entryPoint]: server.js
 */
const entryPoint = require("require-main-filename")();

/**
 * [rootPath]: Directory of "entryPoint"
 */
const rootPath = path.dirname(entryPoint);

module.exports = rootPath;