const errorCtrl = (err, req, res, next) => {
  console.log("[error.js]:Error handler");
  res.status(500).send({ error: true });
};

module.exports = errorCtrl;