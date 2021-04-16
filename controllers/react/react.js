/**
 * Native and third-party modules
 */
 const path = require('path');


 /**
  * Own modules
  */
 const root = require("../../utilities/rootPath/rootPath");
 
 /**
  * Serve react bundle
  */
 exports.serveReactBundle = (req, res, next) => {
   res.sendFile(path.join(root, 'build', 'index.html'), err => { if (err) next(err) });
 };