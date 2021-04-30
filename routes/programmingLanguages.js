const express = require('express');
const router = express.Router();
const programmingLanguages = require('../services/programmingLanguages');

//teste elias
//instalar libs jsonwebtoken
//login no app
router.post('/login', (req, res) => {
  if (req.body.user === 'teste' && req.body.pwd === '123') {
    const id = 1;
    const token = jwt.sign({ id }, secretKey, {
      expires: 600,
    });
    res.send({ token });
  } else {
    res.status(401).body({ message: 'Usuário e/ou senha inválidos' });
  }
});
//fim teste

//GET programming languages
router.get('/', async function (req, res, next) {
  try {
    res.json(await programmingLanguages.getMultiple(req.query.pages));
    console.log('GET http://localhost:3000/programming-languages');
  } catch (err) {
    res.status(500);
    console.error(`erro ao obter linguagens de programação`, err.message); //(`erro while getting programming languages`, err.message);
  }
});

//POST programming language !!
router.post('/', async function (req, res, next) {
  try {
    res.json(await programmingLanguages.create(req.body));
    console.log('POST http://localhost:3000/programming-languages');
  } catch (err) {
    console.log(`Error while creating programming language`, err.message);
    //res.status();
    next(err);
  }
});

//PUT programming languages
router.put('/:id', async function (req, res, next) {
  try {
    res.json(await programmingLanguages.update(req.params.id, req.body));
    console.log('PUT http://localhost:3000/programming-languages');
  } catch (err) {
    console.log(`Error while updating programming language`, err.message);
    //res.status();
    next(err);
  }
});

//DELETE programming languages
router.delete('/:id', async function (req, res, next) {
  try {
    res.json(await programmingLanguages.remove(req.params.id));
    console.log('DELETE http://localhost:3000/programming-languages');
  } catch (err) {
    console.log(`Error while deleting programming language`, err.message);
    //res.status();
    next(err);
  }
});

module.exports = router;
