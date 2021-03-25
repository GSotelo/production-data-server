const errorCtrl = (err, req, res, next) => {
  console.log("[error.js]:Error handler controller");
 // console.log(err);
  res.status(500).send({ error: true });
};

module.exports = errorCtrl;