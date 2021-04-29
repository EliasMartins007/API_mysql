const express = require('express');
const router = express.Router();
const programmingLanguages = require('../services/programmingLanguages');

//GET programming languages
router.get('/', async function (req, res, next) {
  try {
    res.json(await programmingLanguages.getMultiple(req.query.pages));
  } catch (err) {
    console.error(`erro ao obter linguagens de programação`, err.message); //(`erro while getting programming languages`, err.message);
  }
});
module.exports = router;
