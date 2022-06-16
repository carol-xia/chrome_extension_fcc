const express = require('express');
const app = express();
const path = require('path');
const { stringify } = require('querystring');
const controller = require('./controller');

app.use(express.json());
app.use(express.static(path.join(__dirname, './../client')));

//GET middleware
app.get('/pokemon', controller.getPokemon, (req, res) => {
  res.status(200).json(res.locals.data);
});

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => console.log('listening on port 3000'));

module.exports = app;