const errorCtrl = (err, req, res, next) => {
  console.log("[error.js]:Error handler controller");
  res.status(500).send({ error: true });
};

module.exports = errorCtrl;