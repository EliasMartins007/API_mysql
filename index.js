const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.POrt || 3000;
const programmingLanguagesRouter = require('./routes/programmingLanguages');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({ message: 'ok' });
});

app.use('/programming-languages', programmingLanguagesRouter);

//error
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`servidor rodando  ${port}`);
});
