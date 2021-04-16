"use strict";

/**
 * Native and third-party modules
 */
var path = require('path');
/**
 * Own modules
 */


var root = require("../../utilities/rootPath/rootPath");
/**
 * Serve react bundle
 */


exports.serveReactBundle = function (req, res, next) {
  res.sendFile(path.join(root, 'build', 'index.html'), function (err) {
    if (err) next(err);
  });
};