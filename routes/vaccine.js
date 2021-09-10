var express = require('express');
var router = express.Router();
const VaccineService = require('../services/vaccine');

router.get('/', async (req, res, next) => {
  const vaccines = await VaccineService.findAll(req.query)
  res.status(200).json(vaccines)
});

module.exports = router;