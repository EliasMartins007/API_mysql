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

//POST programming language !!
router.post('/', async function (req, res, next) {
  try {
    res.json(await programmingLanguages.create(req.body));
  } catch (err) {
    console.log(`Error while creating programming language`, err.message);
    next(err);
  }
});
module.exports = router;
