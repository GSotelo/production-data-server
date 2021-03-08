const fs = require("fs");

exports.runningHoursCtrl = (req, res, next) => {
  console.log("Production controller: Request running hours");
  res.send({ status: true, messenger: "Running hours controller" });
}

exports.sprayModeCtrl = (req, res, next) => {
  console.log("Production controller: Spray mode");
  res.send({ status: true, messenger: "Spray mode controller" });
}

exports.systemStatusCtrl = (req, res, next) => {
  console.log("Production controller: System status");
  res.send({ status: true, messenger: "System status controller" });
}

exports.coatedSurfaceCtrl = (req, res, next) => {
  console.log("Production controller: Coated surface");
  res.send({ status: true, messenger: "Coated surface controller" });
}

exports.lineDensityCtrl = (req, res, next) => {
  console.log("Production controller: Line density");
  res.send({ status: true, messenger: "Line density controller" });
}

exports.conveyorSpeedCtrl = (req, res, next) => {
  console.log("Production controller: Conveyor Speed");
  res.send({ status: true, messenger: "Conveyor speed controller" });
}

exports.flexibleCtrl = (req, res, next) => {
  console.log("Flexible controller: Changing area");
  res.send({ status: true, messenger: "Flexible controller" });
}
