var express = require('express');
var router = express.Router();

const { Cosa }  = require("../models/Cosa")

router.get('/', async (req, res, next) => {
  const cosa = await Cosa.find();
  res.send(cosa);
});

module.exports = router;
